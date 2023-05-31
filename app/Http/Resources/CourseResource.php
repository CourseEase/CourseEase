<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CourseResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        

        $courses = [
            [
                'id' => 1,
                'name' => 'Introduction to Programming',
                'description' => 'Learn the basics of programming and computer science.',
                'duration' => '8 weeks',
                'instructor' => 'John Doe',
            ],
            [
                'id' => 2,
                'name' => 'Web Development Fundamentals',
                'description' => 'Explore the foundational concepts of web development.',
                'duration' => '12 weeks',
                'instructor' => 'Jane Smith',
            ],
            [
                'id' => 3,
                'name' => 'Data Science for Beginners',
                'description' => 'Discover the fundamentals of data science and analysis.',
                'duration' => '10 weeks',
                'instructor' => 'Michael Johnson',
            ],
            // Add more courses as needed
        ];
              
        return [
            'courses' => $courses,
        ];
    }
    

    public function toResponse($request)
    {
        return parent::toResponse($request)
            ->header('Custom-Header', 'Value')
            ->setStatusCode(200);
    }
}