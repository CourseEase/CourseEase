<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\UserResource;
use App\Http\Resources\CourseResource;
use App\Http\Resources\MaterialResource;

class HomeController extends Controller
{
    //
    public function index()
    {
        return view("user/home");
    }


    public function showUsers($id)
    {
        return new UserResource(0);
    }

    public function showCourses($id)
    {
        return new CourseResource(0);
    }

    public function showLearningMaterials($id)
    {
        return new MaterialResource(0);
    }

}
