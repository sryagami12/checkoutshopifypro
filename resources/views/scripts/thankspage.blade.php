<script>
    window.addEventListener('load', function() {
        var total                   = "{{$total_dolar}}";
        var subtotal                = "{{$subtotal_dolar}}";
        var taxes                   = "{{$taxes_dolar}}";
        var currency                = "{{$client_currency}}";
        var exchange                = "{{$client_currency_exchange}}";
        var language                = "{{$language}}";

        total           = parseFloat(total);
        subtotal        = parseFloat(subtotal);
        taxes           = parseFloat(taxes);
        exchange        = parseFloat(exchange);

        total           = Math.round(total*exchange);
        subtotal        = Math.round(subtotal*exchange);
        taxes           = Math.round(taxes*exchange);
        exchange        = Math.round(exchange*exchange);

        document.getElementById('total_1').innerHTML = total + ' ' + currency;
        document.getElementById('total_2').innerHTML = total + ' ' + currency;

        document.getElementById('subtotal_1').innerHTML = subtotal + ' ' + currency;

        document.getElementById('taxes_id').innerHTML = taxes + ' ' + currency;
        
    });
</script>