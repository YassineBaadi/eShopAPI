import { useEffect, useState } from "react";
import axios from "axios";
import "./produit.css";
import { Link } from "react-router-dom";


export default function Produits() {
  const [produits, setProduits] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProduits(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="produitsContainer">
      <h2>Nos Produits</h2>
      <div className="produitsGrid">
        {produits.map((produit) => (
          <div key={produit.id} className="produitCard">
            <img src={produit.image} alt={produit.title} />
            <h3>{produit.title}</h3>
            <p className="price">{produit.price.toFixed(2)} €</p>
            <span className="rating">⭐ {produit.rating.rate}</span>

            <Link to={`/products/${produit.id}`} className="voirDetailsBtn">
                Voir détails
            </Link>
            </div>
        ))}
      </div>
    </div>
  );
}
