
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

