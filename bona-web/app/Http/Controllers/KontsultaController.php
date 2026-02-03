<?php

namespace App\Http\Controllers;

use App\Http\Requests\KontsultaRequest;
use App\Mail\ContactConfirmation;
use Illuminate\Support\Facades\Mail;

class KontsultaController extends Controller
{
    public function store(KontsultaRequest $request)
{
    $data = $request->validated();
    
    // 🎯 EMPRESA: contact-recived.blade.php
    Mail::to('bonajatetxea@gmail.com')
        ->send(new ContactConfirmation($data, 'emails.contact-recived'));
    
    // 📧 CLIENTE: contact-confirmation.blade.php  
    Mail::to($data['email'])
        ->send(new ContactConfirmation($data, 'emails.contact-confirmation'));
    
    return back()->with('success', 'Zure kontsulta ondo bidali da!');
}

}
