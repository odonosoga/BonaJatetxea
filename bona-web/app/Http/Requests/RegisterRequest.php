<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:100'],
            'surname' => ['required', 'string', 'max:100'],
            'email' => [
                'required', 
                'string', 
                'email', 
                'max:255', 
                'unique:users,email',
                'unique:pending_registrations,email' 
            ],
            'phone' => [
                'required', 
                'numeric', 
                'digits_between:9,15', 
                'unique:users,phone',
                'unique:pending_registrations,phone'  
            ],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
            'birth_date' => ['required', 'date', 'date_format:Y-m-d', 'before:today'],
            'address' => ['required', 'string', 'max:255'],
            'postal_code' => ['required', 'string', 'max:10'],
        ];
    }
}
