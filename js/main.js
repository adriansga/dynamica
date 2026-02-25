
jQuery(function(){
	$('#baner').animate({opacity: 0}, 0);
	$('.imgMenu').animate({opacity: .7}, 0);
	
	$('.imgMenu').hover(function(){
		$(this).animate({opacity: 1}, 100);
	},function(){
		$(this).animate({opacity: .7}, 100);
	});	
	
	$('.imgMenu2').hover(function(){
		$(this).animate({opacity: .8}, 100);
	},function(){
		$(this).animate({opacity: 1}, 100);
	});


	
	
	//menuGlowne
	var nav = $("#menuGlowne");
	nav.find("li").each(function() {
		if ($(this).find("ul").length > 0) {

			$(this).mouseenter(function() {
			$(this).find("ul").stop(true, true).slideDown(200);
			});

			$(this).mouseleave(function() {
			$(this).find("ul").stop(true, true).hide();
		});
	}
	});
	//menuGlowne
	
		
	$('.alignright , .alignleft , .aligncenter , .alignnone, .obrazek').parent().magnificPopup({
	  type: 'image'
	});
	
	$('#do_gory').hide();
	$(window).scroll(function () {
		if($(window).scrollTop()>190)
			$('#do_gory').fadeIn();
		else
			$('#do_gory').fadeOut();
	});
	$('#do_gory').click(function(){
		$.scrollTo( '#glowny_naglowek_knt', 500, function(){ });
	});
});

