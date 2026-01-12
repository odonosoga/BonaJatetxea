<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Osagaia extends Model
{
    protected $table = 'osagaiak';
    protected $primaryKey = 'idOsagai';

    protected $fillable = ['idBiltegia', 'izena'];

    public function biltegia(): BelongsTo
    {
        return $this->belongsTo(Biltegia::class, 'idBiltegia', 'idBiltegia');
    }

    public function platerak(): HasMany
    {
        return $this->hasMany(Platera::class, 'idOsagai', 'idOsagai');
    }
}
