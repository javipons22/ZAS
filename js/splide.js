new Splide( '#splide-marcas', {
	type   : 'loop',
	perPage: 8,
	arrows: false,
	breakpoints: {
		767: {
			perPage: 3,
			
		},
		991: {
			perPage: 6
		}
	}
} ).mount();
