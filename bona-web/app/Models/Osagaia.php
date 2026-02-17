<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Osagaia extends Model
{
    use HasFactory;

    protected $table = 'osagaiak';
    protected $fillable = ['idBiltegia', 'izena'];
}
