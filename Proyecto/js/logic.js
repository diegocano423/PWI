var hideSearch = function(){
	$('#searchBar').addClass('hidden');
	console.log('asasd');
}

 var showSearch = function(){
	$('#searchBar').removeClass('hidden');
	console.log('asasd');
}

$(document).ready(function(){
	$('#search').click(function(){
		hideSearch();
	});

	$('#back').click(function(){
		showSearch();
	});
});

