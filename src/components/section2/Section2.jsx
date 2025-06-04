import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "./section2.css";
import { Link } from "react-router-dom";

export default function Section2() {
  const [donnee, setDonnee] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/")
      .then((response) => {
        const filtered = response.data.filter(
          (product) => product.rating.rate >= 4
        );
        setDonnee(filtered);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="section2Container">
      <h2>Produits les mieux notés</h2>
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={4000}
        loop={true}
        slidesPerView="auto"
        spaceBetween={20}
        className="productCarousel"
      >
        {donnee.map((product) => (
          <SwiperSlide key={product.id} className="productSlide">
            <div className="productCard">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.price.toFixed(2)} €</p>
              <span className="rating">⭐ {product.rating.rate}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

     
      <div className="buttonWrapper">
        <Link to="/produits" className="viewAllButton">
          Voir tous les produits
        </Link>
      </div>
    </div>
  );
}
