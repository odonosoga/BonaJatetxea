<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class KontsultaRequest extends FormRequest
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
            'name'    => ['required', 'string', 'max:255'],
            'email'   => ['required', 'email:rfc,dns', 'max:255'],
            'phone'   => ['nullable', 'string', 'max:20'],
            'reason'  => ['required', 'in:info,appointment,quote,other'],
            'message' => ['required', 'string', 'min:10', 'max:2000'],
        ];
    }

    public function messages(): array
    {
        return [
            'name.required'    => __('contact.nameFeedback'),
            'email.required'   => __('contact.emailFeedback'),
            'email.email'      => __('contact.emailFeedback'),
            'reason.required'  => __('contact.reasonFeedback'),
            'reason.in'        => __('contact.reasonFeedback'),
            'message.required' => __('contact.messageFeedback'),
            'message.min'      => __('contact.messageFeedback'),
        ];
    }

}
