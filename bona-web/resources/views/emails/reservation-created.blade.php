<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            line-height: 1.6;
            color: #1f2937;
            background-color: #f9fafb;
            padding: 24px;
            min-height: 100vh;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background: #ffffff;
            border: 1px solid #e5e7eb;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        .header {
            background: #8d3236; /* Color de BonaJatetxea */
            color: #ffffff;
            padding: 32px 32px 24px;
            text-align: center;
        }
        .logo { font-size: 28px; font-weight: 600; margin-bottom: 4px; }
        .header-subtitle { font-size: 16px; opacity: 0.9; }
        .content {
            padding: 40px 32px;
            text-align: center;
        }
        .greeting {
            font-size: 20px;
            margin-bottom: 24px;
            color: #111827;
        }
        .greeting strong { color: #8d3236; }
        .instruction {
            font-size: 16px;
            margin-bottom: 32px;
            color: #4b5563;
        }
        
        /* Caja de detalles de la reserva */
        .reservation-details {
            background-color: #f3f4f6;
            border-left: 4px solid #8d3236;
            padding: 24px;
            border-radius: 8px;
            margin: 0 auto 32px auto;
            text-align: left;
            max-width: 480px;
        }
        .detail-item {
            margin-bottom: 12px;
            font-size: 16px;
            display: flex;
            align-items: center;
        }
        .detail-item:last-child { margin-bottom: 0; }
        .detail-icon {
            margin-right: 12px;
            font-size: 20px;
            width: 30px;
            text-align: center;
        }
        
        .verify-btn {
            display: inline-block;
            background: #8d3236;
            color: #ffffff !important;
            padding: 16px 32px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            font-size: 16px;
            border: none;
            transition: background 0.2s;
            margin-bottom: 24px;
        }
        .verify-btn:hover {
            background: #7a2b2e;
            color: #ffffff !important;
        }
        
        .footer {
            background: #f9fafb;
            padding: 32px;
            text-align: center;
            color: #6b7280;
            font-size: 14px;
            border-top: 1px solid #e5e7eb;
        }
        .footer-address { font-size: 13px; margin-top: 8px; }
        
        @media (max-width: 600px) {
            body { padding: 16px; }
            .content, .header { padding-left: 24px; padding-right: 24px; }
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header -->
        <div class="header">
            <div class="logo">BonaJatetxea</div>
            <div class="header-subtitle">Erreserba baieztatuta ✅</div>
        </div>
        
        <!-- Content -->
        <div class="content">
            <p class="greeting">
                Kaixo <strong>{{ $erreserba->user->name ?? 'Bezeroa' }}!</strong>
            </p>
            
            <p class="instruction">
                Zure erreserba ondo jaso dugu. Hemen dituzu xehetasunak:
            </p>
            
            <!-- Detalles de la reserva -->
            <div class="reservation-details">
                <div class="detail-item">
                    <span class="detail-icon">📅</span>
                    <strong>Data:</strong>&nbsp; {{ $erreserba->data }}
                </div>
                <div class="detail-item">
                    <span class="detail-icon">⏰</span>
                    <strong>Ordua:</strong>&nbsp; {{ \Carbon\Carbon::parse($erreserba->ordua)->format('H:i') }}
                </div>
                <div class="detail-item">
                    <span class="detail-icon">👥</span>
                    <strong>Pertsonak:</strong>&nbsp; {{ $erreserba->pertsona_Kop }}
                </div>
                <div class="detail-item">
                    <span class="detail-icon">📍</span>
                    <strong>Lokala:</strong>&nbsp; {{ $erreserba->lokala->kokapena ?? 'BonaJatetxea' }}
                </div>
            </div>
            
            
            <p style="font-size: 14px; color: #6b7280;">
                Zure zain gaude! Edozein aldaketa egiteko, jarri gurekin harremanetan.
            </p>
        </div>
        
        <!-- Footer -->
        <div class="footer">
            <p>Mezu hau automatikoa da, mesedez ez erantzun helbide honetara.</p>
            <p class="footer-address">
                <strong>BonaJatetxea</strong><br>
                Nafarroa Hiribidea, 2 - 20013 Donostia<br>
                Gipuzkoa | <a href="mailto:bonajatetxea@gmail.com" style="color: #6b7280;">bonajatetxea@gmail.com</a>
            </p>
        </div>
    </div>
</body>
</html>
