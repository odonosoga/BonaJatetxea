<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Langile extends Model
{
    protected $table = 'langileak';
    protected $primaryKey = 'idLangile';
    protected $fillable = ['mota', 'user_id'];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function lokalenKokapenak()
    {
        return $this->hasMany(Lokala::class, 'idLangile');
    }

    public function txandak()
    {
        return $this->hasMany(LangileLokalenKokapena::class, 'idLangile');
    }
}
