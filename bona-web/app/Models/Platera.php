<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Platera extends Model
{
    use HasFactory;

    protected $table = 'platerak';
    protected $fillable = [
        'izena',
        'deskripzioa', 
        'osagaiak',
        'prezioa',
        'argazkia',
        'sectionKey', 
        'translationKey' 
    ];

    protected $casts = [
        'prezioa' => 'decimal:2'
    ];
}
