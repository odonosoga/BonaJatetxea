<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
class Bezeroa extends Model
{
    protected $table = 'bezeroak';
    protected $primaryKey = 'id_bezero';
    protected $fillable = ['izena', 'abizena', 'adina', 'pasahitza', 'telefonoa', 'email'];
    public function erreserbak(): HasMany
    {
        return $this->hasMany(Erreserba::class, 'id_bezero', 'id_bezero');
    }

}
