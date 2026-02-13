<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\Lokala;
use App\Models\LangileLokalenKokapena;
class Langile extends Model
{
    protected $table = 'langileak';
    protected $primaryKey = 'idLangile';
    protected $fillable = [
        'mota', 'user_id', 
        'monday', 'tuesday', 'wednesday', 
        'thursday', 'friday', 'saturday', 'sunday'
    ];

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
