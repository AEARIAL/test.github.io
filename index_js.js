$(function() {
  	$('strong').mouseover(function(e) {
	$(this).attr('id', 'mouseover_color');
	});

	$('strong').mouseout(function(e) {
	$(this).attr('id', '');
	});
	
	$('#alert').click(function(e) {
	alert('Alert');
	});
});