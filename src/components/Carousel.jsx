import "./Carousel.css" 


export default function Carousel() {
    
    const plusSlides = (num) => {
        console.log(num)
    }

    const currentSlide = (num) => {
        console.log(num)
    }
    return(
        <div className="carousel">
            Carousel Component
        <div className="slideshow-container">

  <div className="mySlides fade">
    <div className="numbertext">1 / 3</div>
    <img src="https://res.cloudinary.com/dgifdj6nx/image/upload/v1706806167/recipEATS-LandingPage2_lxm0k8.jpg" style={ {width:"100%"} }/>
    <div className="text">Caption Text</div>
  </div>

  <div className="mySlides fade">
    <div className="numbertext">2 / 3</div>
    <img src="https://res.cloudinary.com/dgifdj6nx/image/upload/v1706807150/recipEATS-LandingCarousel_isbl3d.jpg" style={ {width:"100%"} }/>
    <div className="text">Caption Two</div>
  </div>

  <div className="mySlides fade">
    <div className="numbertext">3 / 3</div>
    <img src="https://res.cloudinary.com/dgifdj6nx/image/upload/v1706807152/recipEATS-LandingCarousel5_qrb79v.jpg" style={ {width:"100%"} }/>
    <div className="text">Caption Three</div>
  </div>

  <a className="prev" onClick={plusSlides(-1)}>&#10094;</a>
  <a className="next" onClick={plusSlides(1)}>&#10095;</a>
</div>
<br/>

<div style={ {textAlign:"center"} }>
  <span className="dot" onClick={currentSlide(1)}></span>
  <span className="dot" onClick={currentSlide(2)}></span>
  <span className="dot" onClick={currentSlide(3)}></span>
</div>
        </div>
    )
}