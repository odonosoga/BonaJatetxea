<!DOCTYPE html>
<html lang="eu">
<head>
    <meta charset="UTF-8">
    <style>
        body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333; line-height: 1.6; margin: 0; padding: 0; }
        .container { width: 100%; max-width: 600px; margin: 0 auto; border: 1px solid #eee; }
        .header { background: #8d3236; color: white; padding: 30px; text-align: center; }
        .header h1 { margin: 0; font-size: 24px; text-transform: uppercase; letter-spacing: 2px; }
        .content { padding: 30px; background-color: #ffffff; }
        .footer { background: #f9f9f9; padding: 20px; text-align: center; font-size: 12px; color: #777; }
        
        table { width: 100%; border-collapse: collapse; margin: 20px 0; }
        th { background-color: #f8f8f8; font-weight: bold; text-align: left; border-bottom: 2px solid #eee; }
        th, td { padding: 12px; border-bottom: 1px solid #eee; }
        
        .total-row { background-color: #fff9f9; }
        .total-label { font-weight: bold; text-align: right; }
        .total-amount { font-size: 18px; font-weight: bold; color: #8d3236; }
        
        .address-box { background-color: #f4f4f4; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #8d3236; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Bona Jatetxea</h1>
        </div>
        
        <div class="content">
            <h2>Kaixo, {{ $data['name'] }}!</h2>
            <p>Eskerrik asko guregan konfiantza izateagatik. Zure eskaera ongi jaso dugu eta sukaldean lanean gaude ahalik eta azkarren bidaltzeko.</p>
            
            <div class="address-box">
                <strong>Bidalketa helbidea:</strong><br>
                {{ $data['address'] }}
            </div>

            <h3>Eskaeraren xehetasunak:</h3>
            <table>
                <thead>
                    <tr>
                        <th>Produktua</th>
                        <th>Kopurua</th>
                        <th>Prezioa</th>
                    </tr>
                </thead>
                <tbody>
                    @if(isset($cartItems) && count($cartItems) > 0)
                        @foreach($cartItems as $item)
                        <tr>
                            <td>{{ $item['name'] }}</td>
                            <td style="text-align: center;">{{ $item['quantity'] }}</td>
                            <td>{{ number_format($item['price'] * $item['quantity'], 2) }}€</td>
                        </tr>
                        @endforeach
                    @else
                        <tr>
                            <td colspan="3" style="text-align: center;">Ez da produktuen informaziorik aurkitu.</td>
                        </tr>
                    @endif
                </tbody>
                <tfoot>
                    <tr class="total-row">
                        <td colspan="2" class="total-label">GUZTIRA</td>
                        <td class="total-amount">{{ number_format($total, 2) }}€</td>
                    </tr>
                </tfoot>
            </table>

            <p>On egin!</p>
        </div>

        <div class="footer">
            <p>&copy; {{ date('Y') }} Bona Jatetxea. Eskubide guztiak erreserbatuak.</p>
        </div>
    </div>
</body>
</html>