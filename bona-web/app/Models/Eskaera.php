<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Eskaera extends Model
{
    protected $table = 'eskaerak';
    protected $primaryKey = 'id_eskaera';
    public $incrementing = true;
    
    protected $fillable = [
        'eskaeraData',
        'eskaerarenEgoera', 
        'ordainketaMota',
        'entregaHelbidea',
        'entregaKodea'
    ];

    protected $casts = [
        'eskaeraData' => 'date',
    ];
}
