import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import image1 from '../assets/images/Carousel1.png';
import image2 from '../assets/images/Carousel2.png';
import image3 from '../assets/images/Carousel3.png';
import image4 from '../assets/images/Carousel4.png';
import image5 from '../assets/images/Carousel5.png';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

const slideImages = [image1, image2, image3, image4, image5];

export default function () {
	return (
		<div className="slide">
			<Carousel
				showArrows={false}
				showThumbs={false}
				autoPlay={true}
				showStatus={false}
				infiniteLoop={true}
				stopOnHover={false}
			>
				{slideImages.map((el) => (
					<div className="each-slide">
						<img src={el} alt="slide-1" />
					</div>
				))}
			</Carousel>
		</div>
	);
}
