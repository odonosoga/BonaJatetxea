<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreLangileRequest extends FormRequest
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
            'email' => 'required|email|unique:users,email|max:255',
            'password' => 'required|min:8|confirmed',
            'phone' => 'required|string|max:20',
            'birth_date' => 'required|date|before:today',
            'tipo_trabajador' => 'required|in:Banatzaile,Garbitzaile,Sukaldari,Zerbitzari',
            'address' => 'required|string|max:255',
            'postal_code' => 'required|string|max:10|regex:/^[0-9]{5}$/',
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
            'email.unique' => 'Este email ya está registrado.',
            'password.required' => 'La contraseña es obligatoria.',
            'password.min' => 'La contraseña debe tener al menos 8 caracteres.',
            'password.confirmed' => 'Las contraseñas no coinciden.',
            'phone.required' => 'El teléfono es obligatorio.',
            'birth_date.required' => 'La fecha de nacimiento es obligatoria.',
            'birth_date.before' => 'La fecha de nacimiento no puede ser futura.',
            'tipo_trabajador.required' => 'Debes seleccionar un tipo de trabajador.',
            'tipo_trabajador.in' => 'Tipo de trabajador no válido.',
            'address.required' => 'La dirección es obligatoria.',
            'postal_code.required' => 'El código postal es obligatorio.',
            'postal_code.regex' => 'El código postal debe tener 5 dígitos.',
        ];
    }

    /**
     * Prepare the data for validation.
     */
    protected function prepareForValidation()
    {
        $this->merge([
            'tipo_trabajador' => strtoupper($this->tipo_trabajador),
        ]);
    }
}
