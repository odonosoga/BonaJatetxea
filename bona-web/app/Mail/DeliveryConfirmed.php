<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class DeliveryConfirmed extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Propiedades públicas: estarán disponibles automáticamente en la vista Blade.
     */
    public $data;
    public $cartItems;
    public $total;

    /**
     * Create a new message instance.
     *
     * @param array $data      Datos del cliente (nombre, dirección, etc.)
     * @param array $cartItems Productos del carrito
     * @param float $total     Precio total del pedido
     */
    public function __construct($data, $cartItems, $total)
    {
        $this->data = $data;
        $this->cartItems = $cartItems;
        $this->total = $total;
    }

    /**
     * Build the message.
     */
    public function build()
    {
        return $this->subject('Bona Jatetxea - Eskaera Konfirmatua')
                    // Corregido para que coincida con: resources/views/emails/delivery-confirmation.blade.php
                    ->view('emails.delivery-confirmation');
    }
}