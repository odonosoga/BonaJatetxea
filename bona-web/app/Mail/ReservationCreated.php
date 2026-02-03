<?php

namespace App\Mail;

use App\Models\Erreserba;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ReservationCreated extends Mailable
{
    use Queueable, SerializesModels;

    public $erreserba;

    public function __construct(Erreserba $erreserba)
    {
        $this->erreserba = $erreserba;
    }

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: '🍽️ BonaJatetxea - Reserva Confirmada',
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.reservation-created',
        );
    }
}
