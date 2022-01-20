$(function() {
  	$('strong').mouseover(function(e) {
		$(this).attr('id', 'mouseover_color');
	});

	$('strong').mouseout(function(e) {
		$(this).removeAttr('id');
	});

	$('a').mouseover(function(e) {
		$(this).attr('id', 'mouseover_color');
	});

	$('a').mouseout(function(e) {
		$(this).removeAttr('id');
	});
	
	$('#alert').click(function(e) {
		alert('テストのアラート');
	});
});