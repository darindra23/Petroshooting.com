import React from 'react';
import useWindowSize from '../helpers/useWindowSize';
import { Carousel } from 'react-responsive-carousel';

import image1 from '../assets/images/Carousel1.png';
import image2 from '../assets/images/Carousel2.png';
import image3 from '../assets/images/Carousel3.png';
import image4 from '../assets/images/Carousel4.png';
import image5 from '../assets/images/Carousel5.png';
import image6 from '../assets/images/Carousel6.png';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

const slideImages = [image1, image2, image6, image3, image4, image5];

export default function () {
	const [width, height] = useWindowSize();
	return (
		<div className="slide" style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'gray' }}>
			<Carousel
				showArrows={false}
				showThumbs={false}
				autoPlay={true}
				showStatus={false}
				infiniteLoop={true}
				stopOnHover={false}
				width={width <= 1024 && height <= 1024 ? '100vw' : '83vw'}
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
