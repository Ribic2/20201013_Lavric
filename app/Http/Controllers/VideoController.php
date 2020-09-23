<?php

namespace App\Http\Controllers;

use App\Models\Video;
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
            "response" => Video::all()
        ]);
    }

    public function getVideo(string $id): JsonResponse
    {
        return response()->json([
            "response" => Video::where('videoApiTitle', $id)->first()
        ]);
    }
}
