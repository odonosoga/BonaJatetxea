<?php

namespace App\Http\Controllers;
use App\Mail\ContactConfirmation;
use App\Http\Requests\KontsultaRequest;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactMessage;

class KontsultaController extends Controller
{
    public function store(KontsultaRequest $request)
    {
        $data = $request->validated();

        Mail::to($data['email'])->send(new ContactConfirmation($data));

        return back()->with('success', 'Zure mezua ondo bidali da.');
    }

}
