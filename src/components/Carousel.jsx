import React, { useEffect, useState } from 'react';
import './Carousel.css';

export default function Carousel() {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      showSlides(slideIndex + 1);
    }, 2000);

    return () => {
      clearInterval(intervalId); // Clear the interval on component unmount
    };
  }, [slideIndex]); // Re-run effect when slideIndex changes

  const currentSlide = (num) => {
    setSlideIndex(num);
    showSlides(num);
  };

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('mySlides');
    let dots = document.getElementsByClassName('dot');
    if (n > slides.length) {
      n = 1;
    }
    if (n < 1) {
      n = slides.length;
    }
    setSlideIndex(n);

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[n - 1].style.display = 'block';
    dots[n - 1].className += ' active';
  }

  return (
    <div className="carousel">
      
      <div className="slideshow-container">
        <div className="mySlides fade">
          <img
            src="https://res.cloudinary.com/dgifdj6nx/image/upload/v1706806167/recipEATS-LandingPage2_lxm0k8.jpg"
            style={{ width: "auto", height: "400px" }}
          />
          <div className="text"></div>
        </div>

        <div className="mySlides fade">
          <img
            src="https://res.cloudinary.com/dgifdj6nx/image/upload/v1706807150/recipEATS-LandingCarousel_isbl3d.jpg"
            style={{ width: "auto", height: "400px" }}
          />
          <div className="text"></div>
        </div>

        <div className="mySlides fade">
          <img
            src="https://res.cloudinary.com/dgifdj6nx/image/upload/v1706807152/recipEATS-LandingCarousel5_qrb79v.jpg"
            style={{ width: "auto", height: "400px" }}
          />
          <div className="text"></div>
        </div>
      </div>
      <br />

      <div style={{ textAlign: 'center' }}>
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
      </div>
    </div>
  );
}
