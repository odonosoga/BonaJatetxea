<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RecoveryUser extends Model
{
    protected $table = 'recovery_users';

    protected $fillable = [
        'original_id',
        'name',
        'email',
        'role',
        'phone',
        'address',
        'postal_code',
        'birth_date',
        'mota',
        'deleted_at',
    ];

    protected $casts = [
        'birth_date' => 'date',
        'deleted_at' => 'datetime',
    ];
}