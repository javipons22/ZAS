new Splide( '#splide-marcas', {
	type   : 'loop',
	perPage: 9,
	arrows: false,
	autoplay: true,
	breakpoints: {
		767: {
			perPage: 3,
			
		},
		991: {
			perPage: 6
		},
		1024: {
			perPage: 6
		}
	}
} ).mount();
