<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    //
    public function index()
    {
        return view("admin/home");
    }

    public function createLesson()
    {
        return view("admin/create-lesson");
    }
}