import React ,{useState} from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Techcse from '../../images/4804443.jpg'
import './carousel.css'


const Carousel_domain = () => {
    let settings={
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow:3,
        slidesToScroll:1,
        cssEase: "linear",
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        
       
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 780,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]

    }

    return (
        <div className='Carousel-outer-div'>
        <Slider {...settings}>
        <div className='card'>
          
          <img src={Techcse}  className='card-img' alt="tech cse"  />
        </div>
        <div >
          
          <img src={Techcse}  className='card-img' alt="tech cse" />

        </div>
        <div className='card'>
          
          <img src={Techcse}  className='card-img' alt="tech cse" />
        </div>
        <div className='card'>
          <img src={Techcse}  className='card-img'  alt="tech cse" />
        </div>
        <div className='card'>
          <img src={Techcse}  className='card-img' alt="tech cse" />
        </div>
        <div className='card' >
          <img src={Techcse}  className='card-img' alt="tech cse" />
        </div>
        <div className='card'>
          <img src={Techcse}   className='card-img' alt="tech cse" />
        </div>
        <div className='card'>
          <img   className='card-img' src={Techcse} alt="tech cse" />
        </div>
        <div className='card'>
          
          <img  className='card-img'src={Techcse} alt="tech cse"  />
        </div>
      </Slider>
      </div>
    )
    
}

export default Carousel_domain
