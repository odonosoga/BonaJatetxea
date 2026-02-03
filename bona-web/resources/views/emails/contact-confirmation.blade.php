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
            background: #8d3236;
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
        .details-box {
            background-color: #f3f4f6;
            border-left: 4px solid #8d3236;
            padding: 24px;
            border-radius: 8px;
            margin: 0 auto 32px auto;
            text-align: left;
            max-width: 480px;
        }
        .detail-item { margin-bottom: 8px; }
        .footer {
            background: #f9fafb;
            padding: 32px;
            text-align: center;
            color: #6b7280;
            font-size: 14px;
            border-top: 1px solid #e5e7eb;
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header -->
        <div class="header">
            <div class="logo">BonaJatetxea</div>
            <div class="header-subtitle">Kontsulta jasota ✅</div>
        </div>
        
        <!-- Content -->
        <div class="content">
            <p class="greeting">
                Kaixo <strong>{{ $data['name'] }}!</strong>
            </p>
            
            <p class="instruction">
                Eskerrik asko gurekin harremanetan jartzeagatik. Zure mezua ondo jaso dugu eta ahalik eta lasterren erantzungo dizugu.
            </p>
            
            <p class="instruction" style="font-size: 14px; color: #6b7280; margin-bottom: 16px;">
                Hemen duzu bidalitakoaren laburpena:
            </p>

            <div class="details-box">
                <div class="detail-item"><strong>Arrazoia:</strong> {{ $data['reason'] }}</div>
                <div class="detail-item"><strong>Mezua:</strong></div>
                <div style="margin-top: 4px; font-style: italic;">"{{ $data['message'] }}"</div>
            </div>
            
            <p style="font-size: 14px; color: #6b7280;">
                Zure zain gaude!
            </p>
        </div>
        
        <!-- Footer -->
        <div class="footer">
            <p>Mezu hau automatikoa da, mesedez ez erantzun helbide honetara.</p>
            <p style="font-size: 12px; margin-top: 10px;">
                <strong>BonaJatetxea</strong><br>
                20013 Donostia
            </p>
        </div>
    </div>
</body>
</html>
