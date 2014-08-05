$('.btn-search').click(function(){
	if($('.nav-search').hasClass('form-hide')) {
       $('.nav-search').fadeTo(100, 1);
       console.log('has class form-hide');
    }
    else{        $('.nav-search').fadeTo(100, 0);

           console.log('no form-hide');
}

	$('.nav-search').toggleClass('form-hide');
});

$('#mobileDropdown').on('show.bs.dropdown', function() {
	$('#mobileNavIcon').removeClass('icon-caret-down').addClass('icon-caret-up');
}).on('hide.bs.dropdown', function() {
	$('#mobileNavIcon').removeClass('icon-caret-up').addClass('icon-caret-down');
});