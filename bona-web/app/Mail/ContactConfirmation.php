<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ContactConfirmation extends Mailable
{
    public $data;
    public $view;  

    public function __construct(array $data, $view = 'emails.contact-confirmation')
    {
        $this->data = $data;
        $this->view = $view; 
    }

    public function content(): Content
    {
        return new Content(view: $this->view);  
    }
}

