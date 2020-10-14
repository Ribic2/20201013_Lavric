<?php

namespace App\Http\Controllers;

use App\Models\Video;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Storage;

class VideoController extends Controller
{

    /**
     * Returns all videos
     * @return JsonResponse
     */
    public function getVideos(): JsonResponse
    {
        return response()->json([
            "response" => Video::orderBy('orderSequence', 'asc')->get()
        ]);
    }

    /**
     * @param string $id
     * @return JsonResponse
     */
    public function getVideo(string $id): JsonResponse
    {
        return response()->json([
            "response" => Video::where('videoApiTitle', $id)->first()
        ]);
    }

    /**
     * Changes sequence of videos
     * @param int $oldIndex
     * @param int $newIndex
     */
    public function changeSequence(int $oldIndex, int $newIndex)
    {
        // Checks if user accidentally moved item on item
        if ($oldIndex == $newIndex) {
            return;
        }
        // Checks if video is going up the sequence ladder or not
        if ($oldIndex > $newIndex) {
            $replacerId = Video::where('orderSequence', $oldIndex)->first();
            $idBeingReplaced = Video::where('orderSequence', $newIndex)->first();

            Video::where('id', $replacerId->id)->update(['orderSequence' => $newIndex]);
            Video::where('id', $idBeingReplaced->id)->update(['orderSequence' => $oldIndex]);

            $Videos = Video::where([
                ['orderSequence', '>=', $newIndex],
                ['id', '!=', $replacerId->id]
            ])->orderBy('orderSequence', 'asc')->get();

            for ($i = 0; $i < count($Videos); $i++) {
                Video::where('id', $Videos[$i]->id)->update(['orderSequence' => $Videos[0]->orderSequence + $i]);
            }
        }
        // If video is moved down on sequence ladder
        else {
            $replacerId = Video::where('orderSequence', $oldIndex)->first();
            Video::where('id', $replacerId->id)->update(['orderSequence' => $newIndex]);

            $Videos = Video::where([
                ['orderSequence', '<=', $newIndex],
                ['id', '!=', $replacerId->id]
            ])->orderBy('orderSequence', 'asc')->get();

            for ($i = 0; $i < count($Videos); $i++) {
                Video::where('id', $Videos[$i]->id)->update(['orderSequence' => $i + 1]);
            }
        }

    }

    /**
     * Deletes item from database
     * @param int $id
     * @return JsonResponse
     */
    public function deleteVideo(int $id): JsonResponse
    {
        try {
            // Gets image name and deletes it from storage
            $imageName = Video::find($id);
            Storage::disk('public')->delete($imageName->videoThumbnail);

            // After that it deletes item from database
            Video::destroy($id);

            //Re-increments sequence for videos
            $videosToResetSequence = Video::all();

            for ($i = 0; $i < count($videosToResetSequence); $i++) {
                Video::where('id', $videosToResetSequence[$i]->id)->update(['orderSequence' => $i + 1]);
            }

            return response()->json([
                "response" => "Item successfully deleted!"
            ]);
        } catch (\Exception $e) {
            abort(403, $e->getMessage());
        }
    }

    /**
     * Updates video
     * @param Request $request
     * @param int $id
     * @return JsonResponse
     *
     */
    public function updateVideo(Request $request, int $id): JsonResponse
    {

        $videoTitle = $request->input('videoTitle');
        $videoDescription = $request->input('videoDescription');
        $videoLink = $request->input('videoLink');

        // Checks if data was provided
        if (!$request->filled(['videoTitle', 'videoDescription', 'videoLink'])) {
            abort(403, "Some data is missing!");
        }

        // Updates data
        Video::where('id', $id)->update([
            "videoTitle" => $videoTitle,
            "videoDescription" => $videoDescription,
            "videoLink" => $videoLink
        ]);

        return response()->json([
            "response" => "Item successfully updated!"
        ]);
    }

    /**
     * Item added
     * @param Request $request
     * @return JsonResponse
     */
    public function uploadVideo(Request $request): JsonResponse
    {
        // Checks if provided data is filled
        if (!$request->filled(['videoTitle', 'videoApiTitle', 'videoDescription', 'videoLink'])) {
            abort(403, "Some data is missing");
        }

        // Uploads image and checks if image exists
        if (Storage::disk('public')->exists($request->input('videoApiTitle') . ".png")) {
            abort(403, "Image with same name already exists!");
        }
        $request->file('image')->storeAs('public', $request->input('videoApiTitle') . ".png");

        // Added data to database
        try {
            Video::create([
                "videoTitle" => $request->input('videoTitle'),
                "videoApiTitle" => $request->input('videoApiTitle'),
                "videoDescription" => $request->input('videoDescription'),
                "videoLink" => $request->input('videoLink'),
                "videoThumbnail" => $request->input('videoApiTitle') . ".png",
                "orderSequence" => Video::all()->count() + 1
            ]);

            return new JsonResponse([
                "response" => "item added!"
            ]);
        } catch (\Exception $e) {
            abort(403, $e);
        }

    }
}
