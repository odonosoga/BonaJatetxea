<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
class Hornitzailea extends Model
{
    protected $table = 'hornitzaileak';
    protected $primaryKey = 'idHornitzailea';

    protected $fillable = [
        'izenaProduktua', 'produktuarenDeskribapena', 'produktuKantitatea'];

    public function inbentarioak(): HasMany
    {
        return $this->hasMany(BiltegiHornitzailea::class, 'idHornitzailea', 'idHornitzailea');
    }
}
