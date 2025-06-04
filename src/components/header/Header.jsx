import Navbar from '../navbar/Navbar';
import './header.css';
import logo from '../../assets/img/logo.png'; 
import { FaUser, FaShoppingCart } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <div className="headerContainer">
        <div className="headerContent">
            <div className="leftSide">
            <Link to={'/'}><img src={logo} alt="Logo" className="logo" /></Link> 
            <Navbar />
            </div>
            {/* <div className="iconGroup">
            <FaUser className="icon" />
            <FaShoppingCart className="icon" />
            </div> */}
        </div>
    </div>

  );
}
