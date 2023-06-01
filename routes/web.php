<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });
Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

// Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/user', [App\Http\Controllers\User\HomeController::class, 'index'])->name('user.home');

Route::get('/admin', [App\Http\Controllers\Admin\HomeController::class, 'index'])->name('admin.home');

Route::get('/admin/create-lesson', [App\Http\Controllers\Admin\HomeController::class, 'createLesson'])->name('admin.create-lesson');

// resources with sample data
Route::get('/show-users/{id}', [App\Http\Controllers\User\HomeController::class, 'showUsers']);
Route::get('/show-courses/{id}', [App\Http\Controllers\User\HomeController::class, 'showCourses']);
Route::get('/show-materials/{id}', [App\Http\Controllers\User\HomeController::class, 'showLearningMaterials']);


// Access react Route

Route::get('/test', function () {
    return view('layouts.test');
});

Route::get('/test/{any}', function () {
    return view('layouts.test');
})->where('any', '.*');

