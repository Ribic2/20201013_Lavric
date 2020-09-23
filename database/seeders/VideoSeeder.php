<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class VideoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('videos')->insert([

            [
                'id' => 1,
                'videoTitle' => 'Ford Slovenija Winter campaign 2020',
                'videoDescription' => 'Client: Ford Slovenija;Production: Lab 007;Producer: Lea Bajt;Director: Miha Kačič;DOP: Rožle Bregar, Peter Perunović;Post production: Nik Lavrič',
                'videoLink' => 'https://www.youtube.com/embed/rtiYy29ueTo?list=PLyEfQXlqMsZCqtJE0O1ud2QXb3DugfRQi',
                'videoThumbnail' => 'ford_01.jpg',
                'videoApiTitle' => 'ford-slovenija-slovenija-winter-campaign-2020',
                'sequence' => 1
            ],
            [
                'id' => 2,
                'videoTitle' => 'Obrtna zbornica 50 let',
                'videoDescription' => 'Client: Obrtno-podjetniška zbornica Slovenija;
                Production: Lab 007;
                Director and DOP: Miha Kačič;
                Post production: Nik Lavrič
                ',
                'videoLink' => 'https://www.youtube.com/embed/ijouZo-HLu4',
                'videoThumbnail' => 'ozs_50.jpg',
                'videoApiTitle' => 'obrtna-zbornica-50-let',
                'sequence' => 2
            ],
            [
                'id' => 3,
                'videoTitle' => 'Pirnar Contemporary Doors',
                'videoDescription' => 'Client: Pirnar;
                Production: Lab 007;
                Animation: Nik Lavrič',
                'videoLink' => 'https://www.youtube.com/embed/cNY5PlmdNrc',
                'videoThumbnail' => 'pirnar_01.jpg',
                'videoApiTitle' => 'pirnar-contemporary-doors',
                'sequence' => 3
            ],
            [
                'id' => 4,
                'videoTitle' => 'Lidl Otvoritev logističnega centra Arja vas',
                'videoDescription' => 'Client: Lidl Slovenija;
                Production: Lab 007;
                DOP: Miha Kačič;
                Post production: Nik Lavrič
                ',
                'videoLink' => 'https://www.youtube.com/embed/xs9sv5HjXHc',
                'videoThumbnail' => 'lidl_01.jpg',
                'videoApiTitle' => 'lidl-otvoritev-logističnega-centra-arja-vas',
                'sequence' => 4
            ],
            [
                'id' => 5,
                'videoTitle' => 'Epicenter 19',
                'videoDescription' => 'Client: Spid.si;
                DOP: Nik Lavrič;
                Post production: Nik Lavrič
                ',
                'videoLink' => 'https://www.youtube.com/embed/uO6qysJpWWM',
                'videoThumbnail' => 'ec19.jpg',
                'videoApiTitle' => 'epicenter-19',
                'sequence' => 5
            ],
            [
                'id' => 6,
                'videoTitle' => 'Epicenter 20',
                'videoDescription' => 'Client: Spid.si;
                DOP: Nik Lavrič, Jaka Kordiš;
                Post production: Nik Lavrič
                ',
                'videoLink' => 'https://www.youtube.com/embed/Zn03APUwTiA',
                'videoThumbnail' => 'ec20_02.jpg',
                'videoApiTitle' => 'epicenter-20',
                'sequence' => 6
            ],
            [
                'id' => 7,
                'videoTitle' => 'Mastercard Sonic Brand',
                'videoDescription' => 'Client: Mastercard Slovenija;
                Agency: Mayer McCann;
                Director and DOP: Miha Kačič;
                Post production: Nik Lavrič
                ',
                'videoLink' => 'https://www.youtube.com/embed/lnO1jbqcWto',
                'videoThumbnail' => 'mc_01.jpg',
                'videoApiTitle' => 'mastercard-sonic-brand',
                'sequence' => 7
            ],
            [
                'id' => 8,
                'videoTitle' => 'Jan Plestenjak, Kvatropirci & Coto - Res je dober dan',
                'videoDescription' => 'Client: Jan Plestenjak;
                Production: Instant;
                Director and DOP: Vladan Janković;
                Edit: Nik Lavrič;
                Color Correction: Klemen Smolar
                ',
                'videoLink' => 'https://www.youtube.com/embed/ims8JARsIXs',
                'videoThumbnail' => 'janplestenjak_01.jpg',
                'videoApiTitle' => 'jan-plestenjak-kvatropirci-&-coto-res-je-dober-dan',
                'sequence' => 8
            ],
            [
                'id' => 9,
                'videoTitle' => 'Hvala fanta',
                'videoDescription' => 'Director: David Belina;
                Actors: Borna Miljavac Purgar, Alen Mastnak, Jan Doljak;
                Written by: Alen Mastnak, Nejc Jezernik, Tomaž Kranjc, David Belina;
                DOP: Maks Bernard;
                Post production: Nik Lavrič;
                PA: Urban Pajk;
                Grip: Alex Delay;
                Boom operator: Žan Krošl;
                Sound recorder: Alex Slokan
                ',
                'videoLink' => 'https://www.youtube.com/embed/LctgiId2-VU',
                'videoThumbnail' => 'hvalafanta_01.jpg',
                'videoApiTitle' => 'hvala-fanta',
                'sequence' => 9
            ],
            [
                'id' => 10,
                'videoTitle' => 'Bartog - Logistic center',
                'videoDescription' => 'Production: Real Frame;
                DOP: Jernej Auguštin;
                Edit: Jernej Auguštin;
                Grade & logo animation: Nik Lavrič;
                ',
                'videoLink' => 'https://www.youtube.com/embed/Ba1PVhtRbb4',
                'videoThumbnail' => 'bartog_01.jpg',
                'videoApiTitle' => 'bartog-logistic-center',
                'sequence' => 10
            ],
            [
                'id' => 11,
                'videoTitle' => 'Petrol IAM',
                'videoDescription' => 'PClient: Petrol - IAM Ljubljana;
                Director: David Belina;
                DOP: Nejc Hafner;
                1st AC: Jaka Sajovic;
                AD: Jaka Dolinar;
                Gaffer: Blaž Sluga;
                Post production: Nik Lavrič;
                BTS: Zoja Etja Pavlovski;
                Social media: Neja Rečnik
                ',
                'videoLink' => 'https://www.youtube.com/embed/ylTMJE3o_ic',
                'videoThumbnail' => 'petrol_01.jpg',
                'videoApiTitle' => 'petrol-iam',
                'sequence' => 11
            ],
            [
                'id' => 12,
                'videoTitle' => 'Cosylab radiotherapy products suite',
                'videoDescription' => 'Client: Cosylab;
                Agency: Rubikongral;
                Animation: Nik Lavrič
                ',
                'videoLink' => 'https://www.youtube.com/embed/xppDlPI6glc',
                'videoThumbnail' => 'cosylab_01.jpg',
                'videoApiTitle' => 'cosylab-radiotherapy-products-suite',
                'sequence' => 12
            ],
        ]);
    }
}
