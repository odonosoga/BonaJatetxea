<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('recovery_users', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('original_id');   // ID original del usuario eliminado
            $table->string('name');
            $table->string('email');
            $table->string('role')->nullable();           // 'Langile' o 'Bezero'
            $table->string('phone')->nullable();
            $table->string('address')->nullable();
            $table->string('postal_code')->nullable();
            $table->date('birth_date')->nullable();
            $table->string('mota')->nullable();           // Solo para Langile
            $table->timestamp('deleted_at')->nullable();  // Cuándo fue eliminado
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('recovery_users');
    }
};