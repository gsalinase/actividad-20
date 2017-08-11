var clp = 0;
var dolar = 0;
var euro = 0;


$(document).ready(function($) {
	
	$.ajax({
		url: 'http://www.mindicador.cl/api',
		type: 'get',
		dataType: 'json',
		success: function(data){
			console.log(data);

			dolar = data.dolar.valor;
			euro = data.euro.valor;
			uf = data.uf.valor;
			utm = data.utm.valor;

			$('#dolar').text('$' + ' ' + parseInt(dolar));
			$('#euro').text('$' + ' ' + parseInt(euro));
			$('#uf').text('$' + ' ' + parseInt(uf));
			$('#utm').text('$' + ' ' + parseInt(utm));
		}
	
	});
	
});
	$('#btn-clp').on('click', function(event) {
				var convertClp = $('#convert-clp').val()/dolar;
				$('#response-clp').text(uf);

			});
	$('#btn-usd').on('click', function(event) {
				var convertUsd = $('#convert-usd').val()*dolar;
				$('#response-usd').text(parseInt(convertUsd));

			});
