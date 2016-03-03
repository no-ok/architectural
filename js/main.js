$(document).ready(function(){
  // form styler
	$('input, select').styler();

  //main nav 
  $(".main-menu > a").click(function(e){
    e.preventDefault();

    $(this).siblings('.dropdown').slideToggle();
    $(this).toggleClass('active');
  });

  $(document).on('click', function(e) {
    if (!$(e.target).closest('.main-menu > a, .main-menu .dropdown').length) {
      $('.main-menu .dropdown').slideUp();
      $('.main-menu > a ').removeClass('active');
    }
  });

 // main-slider
  $(".main-slider").owlCarousel({
    navigation : true, 
    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem:true,
    navigationText : false
  });

  // search-block

  $('.search-block .submit').click(function(){
    $(this).siblings('div').toggleClass('active');
  });

});







