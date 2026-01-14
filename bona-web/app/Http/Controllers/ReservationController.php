<?php

namespace App\Http\Controllers;
use App\Http\Requests\ErreserbaRequest;


class ReservationController extends Controller
{
    public function store(ErreserbaRequest $request)
    {
        $data = $request->validated();

        return back()-> with('success', 'Erreserba ondo bidali da!');
    }
}
