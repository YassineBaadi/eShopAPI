import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./details.css";

export default function Details() {
  const { id } = useParams();
  const [produit, setProduit] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduit(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!produit) return <div>Chargement...</div>;

  return (
    <div className="detailsContainer">
      <img src={produit.image} alt={produit.title} />
      <div className="detailsInfo">
        <h2>{produit.title}</h2>
        <p className="category">Catégorie : {produit.category}</p>
        <p className="price">{produit.price.toFixed(2)} €</p>
        <p className="description">{produit.description}</p>
        <span className="rating">⭐ {produit.rating.rate} / 5</span>
      </div>
    </div>
  );
}
