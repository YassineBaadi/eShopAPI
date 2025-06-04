import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './section1.css';
import slide1 from '../../assets/img/slide1.jpg'
import slide2 from '../../assets/img/slide2.jpg'
import slide3 from '../../assets/img/slide3.jpeg'
import { Link } from 'react-router-dom';


export default function Section1() {
  const slides = [
    {
      image: slide1,
      text: 'CÉLÉBREZ VOTRE FORCE AVEC STYLE',
      button: 'Découvrir'
    },
    {
      image: slide2,
      text: 'AFFICHEZ VOTRE PUISSANCE AU QUOTIDIEN',
      button: 'Découvrir'
    },
    {
      image: slide3,
      text: 'PORTEZ CE QUI VOUS DÉFINIT',
      button: 'Découvrir'
    }
  ];

  return (
    <div className="section1Container">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000 }}
        loop={true}
        pagination={{ clickable: true }}
        className="swiperContainer"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="slide"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="slideContent">
                <h2>{slide.text}</h2>
                <Link to={"/produit"}><button>{slide.button}</button></Link> 
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
