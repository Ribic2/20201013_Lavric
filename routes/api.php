<?php


use App\Http\Controllers\VideoController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/videos', [VideoController::class, 'getVideos']);
Route::get('/videos/{id}', [VideoController::class, 'getVideo']);
Route::post('/user/login', [UserController::class, 'login']);
Route::post('/user/check', [UserController::class, 'checkUser']);


Route::group(['middleware' => ['auth.jwt']], function(){
    Route::post('/videos/{oldIndex}/to/{newIndex}', [VideoController::class, 'changeSequence']);
    Route::delete('/videos/{id}', [VideoController::class, 'deleteVideo']);
    Route::patch('/videos/{id}', [VideoController::class, 'updateVideo']);
    Route::post('/videos', [VideoController::class, 'uploadVideo']);
});
