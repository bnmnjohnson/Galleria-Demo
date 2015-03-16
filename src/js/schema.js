// Gallery/Carousel JSON response schema
var response = {
	galleryName = "",
	galleryDesc = "",
	created: UTC(),
	lastUpdated: UTC(),
	items: [
		//image response
		{
			title: "QLD Boardrider Battle",
			desc: "The 31st battle was held last weekend with four records broken and...",
			ctaText: "Read More",						//Copy for CTA on carousel
			ctaLink: "http://news.sa.com/2345",			//link for CTA on carousel
			image: {
				name: "QLD_Boardrider_hero", 			//used for alt text
				src: "assets.sa.com/img/carousel/QLD_Boardrider_hero.jpg"
			}
		},
		//mySurf response
		{
			title: "Featured Video",					
			desc: "Checkout Parko in the NSW opens",	//displayed in the carousel, but not gallery
			ctaText: null,
			ctaLink: null,
			mysurf:{
				src: "http://mySurfTV.com/1234", 
				brightcoveId: "122002835", 				//used for brightcove embed
				thumbnail: "assets.sa.com/thumbs/" 		//specify a thumbnail/poster for brightcove
			}
		},
		//youtube response
		{
			title: "Featured Video",
			desc: "Checkout Parko in the NSW opens",
			ctaText: null,
			ctaLink: null,
			youtube:{
				src: "http://youtube.com/1234",			//youtube direct link
				thumbnail: "assets.sa.com/thumbs/"		//alternate thumb
			}
		},
		//vimeo response
		{
			title: "Featured Video",
			desc: "Checkout Parko in the NSW opens",
			ctaText: null,
			ctaLink: null,
			youtube:{
				src: "http://vimeo.com/1234",			//vimeo direct link
				thumbnail: "assets.sa.com/thumbs/"		//alternate thumb
			}
		}
	]
}