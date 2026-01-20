<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', function (){
    return Inertia::render('Home');
});

Route::get('/fashion', function (){
    return Inertia::render('Fasion');
});

Route::get('/services', function (){
    return Inertia::render('Services');
});
