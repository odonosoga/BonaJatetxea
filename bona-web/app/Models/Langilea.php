<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
class Langilea extends Model
{
    protected $table = 'Langileak';
    protected $primaryKey = 'idLangile';
    protected $fillable = ['izena', 'abizena', 'adina', 'mota'];
    public function emaila(): HasOne
    {
        return $this->hasOne(Emaila::class, 'idLangile', 'idLangile');
    }
    
    public function kontratuak(): HasMany
    {
        return $this->hasMany(Kontratua::class, 'idLangile', 'idLangile');
    }

    public function lokalak(): HasMany
    {
        return $this->hasMany(Lokala::class, 'idLangile', 'idLangile');
    }
}



