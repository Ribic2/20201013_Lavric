<?php

namespace App\Http\Controllers;

use App\Models\Video;
use http\Env\Request;
use Illuminate\Http\JsonResponse;

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
        $replacerId = Video::where('orderSequence', $oldIndex)->first();
        $replacedId = Video::where('orderSequence', $newIndex)->first();

        // Replaces videos
        Video::where('id', $replacerId->id)->update(['orderSequence' => $newIndex]);
        Video::where('id', $replacedId->id)->update(['orderSequence' => $oldIndex]);

        $Videos = Video::all();

        // Updates all videos, only the one that was moved
        for ($i = 0; $i < count($Videos); $i++) {
            if ($newIndex != $Videos[$i]->orderSequence && $replacerId->id == $Videos[$i]->id) {
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
            Video::destroy($id);
            return response()->json([
                "Response" => "Item successfully deleted!"
            ]);
        } catch (\Exception $e) {
            return response()->json([
                "Response" => "Error deleting item!"
            ]);
        }
    }

    /**
     * Updates video
     * @param Request $request
     * @return JsonResponse
     */
    public function updateVideo(Request  $request): JsonResponse
    {

        $videoTitle = $request->input('videoTitle');
        $videoDescription = $request->input('videoDescription');
        $videoLink = $request->input('videoLink');

        if(!$request->filled(['videoTitle', 'videoDescription', 'videoLink'])){
            return response()->json([
                "response"=>"Some data is missing"
            ]);
        }

        Video::create([
            "videoTitle" => $videoTitle,
            "videoDescription" => $videoDescription,
            "videoLink" => $videoLink
        ]);

        return response()->json([
            "Response" => "Item successfully updated!"
        ]);
    }

    /**
     * Adds new video
     * @return JsonResponse
     */
    public function uploadVideo(): JsonResponse{

    }
}
