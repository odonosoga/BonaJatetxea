<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateUserRequest extends FormRequest
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
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'email' => [
                'required',
                'email',
                'max:255',
                Rule::unique('users', 'email')->ignore($this->route('user')),
            ],
            'phone' => 'nullable|string|max:20',
            'birth_date' => 'nullable|date|before:today',
            'address' => 'nullable|string|max:255',
            'postal_code' => 'nullable|string|max:10|regex:/^[0-9]{5}$/',
            'mota' => 'nullable|string|max:255',
            'tipo_trabajador' => 'nullable|in:Banatzaile,garbitzaile,sukaldari,zerbitzari',
        ];
    }

    /**
     * Get custom messages for validator errors.
     */
    public function messages(): array
    {
        return [
            'name.required' => 'El nombre es obligatorio.',
            'email.required' => 'El email es obligatorio.',
            'email.email' => 'El email debe ser válido.',
            'email.unique' => 'Este email ya está en uso.',
            'phone.max' => 'El teléfono no puede exceder 20 caracteres.',
            'birth_date.date' => 'La fecha debe ser válida.',
            'birth_date.before' => 'La fecha de nacimiento no puede ser futura.',
            'address.max' => 'La dirección no puede exceder 255 caracteres.',
            'postal_code.regex' => 'El código postal debe tener 5 dígitos.',
            'mota.max' => 'La descripción no puede exceder 255 caracteres.',
            'tipo_trabajador.in' => 'Tipo de trabajador no válido.',
        ];
    }
}
