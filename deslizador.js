window.addEventListener('load', function(){
    new Glider(this.document.querySelector(".deslizador__lista"), {
        slidesToShow: 1,
        slidesToScroll: 1,
        scrollLock: true,
        dots: '.deslizar__indicadores',
        arrows: {
            prev: '.deslizador__anterior',
            next: '.deslizador__siguiente'
        },
        responsive: [
			{
			  // screens greater than >= 775px
			breakpoint: 750,
			settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			}
			},{
			  // screens greater than >= 1024px
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			}
			}
		]
    });
});
	function openNav(){
		document.getElementById("mobile-menu").style.width = "100%";
	}

	function closeNav(){
		document.getElementById("mobile-menu").style.width = "0%";
	}
