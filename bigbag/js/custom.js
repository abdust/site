//============================== ALL DROPDOWN ON HOVER =========================
jQuery(document).ready(function(){
	if($(".navbar").width() > 1007)
	{
		$('.nav .dropdown').hover(function() {
        	$(this).addClass('open');
	    },
	    function() {
	        $(this).removeClass('open');
	    });
	};
});