<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ErreserbaRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'email' =>  'required|email',
            'email_confirmation' => 'required|same:email',
            'name'  =>  'required|string|max:255',
            'surname'   => 'required|string|max:255',
            'people'    => 'required|integer|min:1|max:12',
            'phone' => 'required|string|max:30',
            'date'  => 'required|date|after_or_equal:today',
            'turn'  => 'required|in:goizez,gauez',
            'hour'  => 'required|string',
            'location'  => 'required|string',
            'gift_code'=> 'nullable|string|max:50',           
        ];
    }
}
