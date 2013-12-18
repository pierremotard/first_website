var  taux_du_dollar = 1.3749;
$(document).ready(function() {

	$('#price').mouseenter(function() {
		var prix_en_euro, prix_en_dollar;

		prix_en_euro = $('#price').html().replace(" ","").replace("€","");;
		console.log(prix_en_euro);
		prix_en_dollar = prix_en_euro * taux_du_dollar;
		$('#price').html('$ ' + prix_en_dollar.toFixed(2))

	});	

	$('#price').mouseleave(function() {
		var prix_en_euro, prix_en_dollar;

		prix_en_dollar = $('#price').html().replace(/ /,"").replace("$","");;
		prix_en_euro = prix_en_dollar / taux_du_dollar;
		console.log(prix_en_euro);
		$('#price').html(prix_en_euro.toFixed(2) + ' €')

	});

		

});
