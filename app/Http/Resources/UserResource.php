<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;


class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */


    public function toArray($request)
    {
        

        $users = [
            [
                'id' => 1,
                'name' => 'John Doe',
                'email' => 'johndoe@example.com',
                'role' => 'admin',
            ],
            [
                'id' => 2,
                'name' => 'Jane Smith',
                'email' => 'janesmith@example.com',
                'role' => 'user',
            ],
            [
                'id' => 3,
                'name' => 'Mark Johnson',
                'email' => 'markjohnson@example.com',
                'role' => 'user',
            ],
            // Add more user data entries as needed
        ];

      
        return [
            'users' => $users,
        ];
    }
    

    public function toResponse($request)
    {
        return parent::toResponse($request)
            ->header('Custom-Header', 'Value')
            ->setStatusCode(200);
    }

}