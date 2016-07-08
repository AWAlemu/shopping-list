$(document).ready(function() {
	$('#add-to-list').mouseup(function(e) {
		var item = $('input[name=item]').val();
		if (item != "") {
			$('ol').append('<li>' + item + '</li>');
		}
	});
	$('ol').on('dblclick', 'li', function() {
		$(this).fadeOut(500);
	});
	$('ol').on('click', 'li', function(){
		$(this).toggleClass('checked');
	});
});

