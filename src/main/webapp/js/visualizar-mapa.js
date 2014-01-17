$(document).ready(function(){
	var map = new GMaps({
		el: '#map',
		lat: 51.5073346,
		lng: -0.1276831
		
	});
	
	carregarPonto(51.5073346, -0.1276831, 'London', 'It is working! :D');
	
	function carregarPonto(latitude, longitude, titulo, dados) {
		map.addMarker({
			  lat: latitude,
			  lng: longitude,
			  title: titulo,
			  infoWindow : {content: dados}
			});
	};
	
});

