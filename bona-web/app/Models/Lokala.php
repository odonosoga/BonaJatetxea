<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
class Lokala extends Model
{
    protected $table = 'lokalen_kokapenak';
    protected $primaryKey = 'idLokala';
    protected $fillable = ['idLangile','kokapena'];

    public function arduraduna(): BelongsTo
    {
        return $this->belongsTo(Langilea::class, 'idLangile', 'idLangile');
    }

    public function biltegiak(): HasMany
    {
        return $this->hasMany(Biltegia::class, 'idLokala', 'idLokala');
    }

    public function erreserbak(): HasMany
    {
        return $this->hasMany(Erreserba::class, 'idLokala', 'idLokala');
    }

    public function lanTxandak(): HasMany
    {
        return $this->hasMany(LangileLokala::class, 'idLokala', 'idLokala');
    }
}
