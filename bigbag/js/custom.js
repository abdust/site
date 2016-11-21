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

//============================== Google Analytics =========================
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-71155940-3', 'auto');
ga('send', 'pageview');

//================================ heatmap.it ==================================
(function() {
var hm = document.createElement('script'); hm.type ='text/javascript'; hm.async = true;
hm.src = ('++u-heatmap-it+log-js').replace(/[+]/g,'/').replace(/-/g,'.');
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(hm, s);
})();