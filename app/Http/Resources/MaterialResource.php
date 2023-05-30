<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class MaterialResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        

        $learningMaterials = [
            [
                'id' => 1,
                'title' => 'Introduction to Programming',
                'description' => 'A comprehensive guide to programming concepts and principles.',
                'url' => 'https://example.com/intro-to-programming',
            ],
            [
                'id' => 2,
                'title' => 'Web Development Basics',
                'description' => 'Learn the fundamentals of web development with HTML, CSS, and JavaScript.',
                'url' => 'https://example.com/web-development-basics',
            ],
            [
                'id' => 3,
                'title' => 'Data Structures and Algorithms',
                'description' => 'Explore common data structures and algorithms used in computer science.',
                'url' => 'https://example.com/data-structures-and-algorithms',
            ],
            // Add more learning materials as needed
            // ...
        ];
      
        return [
            'learning_materials' => $learningMaterials,
        ];
    }
    

    public function toResponse($request)
    {
        return parent::toResponse($request)
            ->header('Custom-Header', 'Value')
            ->setStatusCode(200);
    }
}
