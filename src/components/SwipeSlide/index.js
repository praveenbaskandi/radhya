import React, { useState } from 'react';

// react-id-swiper
// import 'swiper/css/bundle';
import Swiper from 'react-id-swiper';

// custom css
import './style.css';

// images
import image1 from '../../assets/image1.jpeg';
import image2 from '../../assets/image2.jpeg';

// slider configuration
const HeroSliderConfigs = {
  containerClass: 'swiper-container hero-slider',
  parallax: true,
  centeredSlides: true,
  grabCursor: true,
  speed: 500,
  spaceBetween: 0,
  effect: 'slide'
};

const SwipeSlide = () => {
  const [parallaxSwiper, setParallaxSwiper] = useState(null);
  const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.95 : 0;
  const parallaxOpacity = 0.5;
  return (
    <Swiper {...HeroSliderConfigs} getSwiper={setParallaxSwiper}>
      <div className="hero-slide">
        <div
          className="slide-image"
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <img src={image1} alt="image1"></img>
        </div>
        <div className="col-md-6 offset-md-3 my-auto text-center text-white">
          <h1 className="text-uppercase mb-2 font-weight-bold">Slide 1</h1>
          <p className="mb-5 small">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque,
            ex quibusdam dolorem quae itaque velit. Nobis nesciunt sed corrupti
            ab quia neque, porro laborum error, autem facilis voluptates
            laboriosam?
          </p>
        </div>
      </div>
      <div className="hero-slide">
        <div
          className="slide-image"
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <img src={image2} alt="image2"></img>
        </div>
        <div className="col-md-6 offset-md-3 my-auto text-center text-white">
          <h1 className="text-uppercase mb-2 font-weight-bold">Slide 1</h1>
          <p className="mb-5 small">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque,
            ex quibusdam dolorem quae itaque velit. Nobis nesciunt sed corrupti
            ab quia neque, porro laborum error, autem facilis voluptates
            laboriosam?
          </p>
        </div>
      </div>
      <div className="hero-slide">
        <div
          className="slide-image"
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
         <img src={image2} alt="image2"></img>
        </div>
        <div className="col-md-6 offset-md-3 my-auto text-center text-white">
          <h1 className="text-uppercase mb-2 font-weight-bold">Slide 1</h1>
          <p className="mb-5 small">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque,
            ex quibusdam dolorem quae itaque velit. Nobis nesciunt sed corrupti
            ab quia neque, porro laborum error, autem facilis voluptates
            laboriosam?
          </p>
        </div>
      </div>
    </Swiper>
  );
};

export default SwipeSlide;