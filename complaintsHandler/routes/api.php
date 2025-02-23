<?php

use App\Http\Controllers\ComplaintApi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
*/

Route::middleware('auth:api');

Route::get("/complaint", [ComplaintApi::class, "index"]);

Route::get('/complaint/{id}', [ComplaintApi::class, 'show']);

Route::delete('/complaint/{id}', [ComplaintApi::class, 'destroy']);
