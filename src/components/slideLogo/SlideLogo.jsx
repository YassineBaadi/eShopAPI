import './slideLogo.css';
import logo from '../../assets/img/logo.png'; 

export default function SlideLogo() {
  const logos = Array(50).fill(0);
  

  return (
    <div className="marqueeWrapper">
      <div className="marqueeTrack">
        {[...logos, ...logos].map((_, i) => (
          <img src={logo} alt="Logo" key={i} className="marqueeLogo" />
        ))}
      </div>
    </div>
  );
}
