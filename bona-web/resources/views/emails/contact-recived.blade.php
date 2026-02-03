<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
            line-height: 1.6; 
            color: #1f2937; 
            background: #f9fafb; 
            padding: 24px; 
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
            background: #8d3236; 
            color: #ffffff; 
            padding: 32px; 
            text-align: center; 
        }
        .logo { font-size: 28px; font-weight: 600; margin-bottom: 4px; }
        .header-subtitle { font-size: 16px; opacity: 0.9; }
        
        .content { padding: 40px 32px; text-align: center; }
        .greeting { 
            font-size: 20px; 
            margin-bottom: 24px; 
            color: #111827; 
            font-weight: 600;
        }
        .greeting strong { color: #8d3236; }
        
        .consulta-details {
            background: #f3f4f6; 
            border-left: 4px solid #8d3236; 
            padding: 24px;
            border-radius: 8px; 
            margin: 32px auto; 
            text-align: left; 
            max-width: 480px;
        }
        .detail-item { 
            margin-bottom: 12px; 
            font-size: 16px; 
            display: flex; 
            align-items: flex-start; 
        }
        .detail-icon { 
            margin-right: 12px; 
            font-size: 20px; 
            width: 30px; 
            margin-top: 2px; 
            font-weight: bold;
        }
        .detail-label { 
            font-weight: 600; 
            color: #374151; 
            min-width: 120px;
        }
        .detail-value { 
            color: #6b7280; 
            margin-left: 8px; 
            flex: 1;
        }
        .detail-value a { 
            color: #8d3236; 
            text-decoration: none; 
        }
        
        .urgency { 
            background: #fef3c7; 
            border: 1px solid #f59e0b; 
            border-radius: 8px; 
            padding: 16px; 
            margin: 24px auto; 
            text-align: left; 
            max-width: 480px;
            border-left: 4px solid #f59e0b;
        }
        .urgency strong { 
            color: #92400e; 
            font-size: 16px;
        }
        .urgency small { 
            color: #92400e; 
            font-size: 14px;
            display: block;
            margin-top: 4px;
        }
        
        .footer { 
            background: #f9fafb; 
            padding: 32px; 
            text-align: center; 
            color: #6b7280; 
            font-size: 14px; 
            border-top: 1px solid #e5e7eb; 
        }
        
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
            <div class="header-subtitle">Kontsulta berria jaso da 📩</div>
        </div>
        
        <!-- Greeting -->
        <div class="content">
            <p class="greeting">
                <strong>{{ $data['name'] }}</strong> kontsulta bidali du!
            </p>
            
            <!-- Detalles cliente -->
            <div class="consulta-details">
                <div class="detail-item">
                    <span class="detail-icon">👤</span>
                    <span class="detail-label">Izena:</span>
                    <span class="detail-value">{{ $data['name'] }}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-icon">📧</span>
                    <span class="detail-label">Email:</span>
                    <span class="detail-value">
                        <a href="mailto:{{ $data['email'] }}">{{ $data['email'] }}</a>
                    </span>
                </div>
                <div class="detail-item">
                    <span class="detail-icon">📱</span>
                    <span class="detail-label">Telefonoa:</span>
                    <span class="detail-value">{{ $data['phone'] ?? 'Ez dago' }}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-icon">💬</span>
                    <span class="detail-label">Mezua:</span>
                    <span class="detail-value">{{ $data['message'] }}</span>
                </div>
            </div>
            
            <!-- Urgency notice -->
            <div class="urgency">
                <strong>📢 Erantzun azkarra gomendatzen da</strong>
                <small>Bezeroak erantzun azkarra espero du</small>
            </div>
        </div>
        
        <!-- Footer -->
        <div class="footer">
            <p>Web formularioaren bidez jasotako kontsulta</p>
            <p style="font-size: 13px;">
                <strong>BonaJatetxea</strong><br>
                <a href="mailto:bonajatetxea@gmail.com">bonajatetxea@gmail.com</a>
            </p>
        </div>
    </div>
</body>
</html>
