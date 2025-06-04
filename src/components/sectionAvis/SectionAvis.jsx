import { useEffect, useState } from "react";
import axios from "axios";
import "./sectionAvis.css";

const avisFictifs = [
  "Produit excellent, je recommande !",
  "Très bonne qualité, livraison rapide.",
  "Conforme à la description, parfait.",
  "J’adore ce produit, il est magnifique.",
  "Le rapport qualité/prix est top.",
  "Service client très réactif, super expérience.",
];

export default function SectionAvis() {
  const [produits, setProduits] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProduits(response.data.slice(0, 4));
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="sectionAvisContainer">
      <h2>Ce que nos clients en disent</h2>
      <div className="avisGrid">
        {produits.map((produit) => (
          <div key={produit.id} className="avisCard">
            <img src={produit.image} alt={produit.title} />
            <h3>{produit.title}</h3>
            <p className="price">{produit.price.toFixed(2)} €</p>
            <div className="avisList">
              <p>"{avisFictifs[Math.floor(Math.random() * avisFictifs.length)]}"</p>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
