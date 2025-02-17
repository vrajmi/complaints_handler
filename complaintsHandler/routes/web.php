<?php

use App\Http\Controllers\Complaint;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::resource('Complaint', Complaint::class);
