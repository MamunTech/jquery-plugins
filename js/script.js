    $(document).ready(function() {
     
      $(".owl-carousel").owlCarousel({
		 autoPlay: true, 
		   autoPlay : 2000, 
		  /* singleItem:true, */
		/*   navigation :true, */
		  /* pagination :false, */
		  /* navigationText :["P","N"]  */	
	  });
     
	 $('a').smoothScroll({
		  offset: -100,
	 });
	 
	 $(".navigation").sticky({topSpacing:0});
	 
	 $('#menu').slicknav();
	 
    });
	
