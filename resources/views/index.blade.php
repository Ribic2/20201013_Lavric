<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Nik Lavric</title>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">
    <link rel="shortcut icon" href="{{ asset('favicon.jpg') }}">
    <meta name="csrf-token" content="{{ csrf_token() }}">
</head>
    <body>
        <div id="app">

        </div>
        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
