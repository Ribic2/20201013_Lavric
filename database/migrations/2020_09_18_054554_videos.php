<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Videos extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('videos', function (Blueprint $table){
            $table->id();
            $table->string('videoTitle')->nullable($value = false);
            $table->longText('videoDescription');
            $table->string('videoLink');
            $table->string('videoThumbnail');
            $table->string('videoApiTitle');
            $table->integer('sequence');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('videos');
    }
}
