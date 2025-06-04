import { Link } from 'react-router-dom'
import './navbar.css'


export default function Navbar(){


    return(

        <>
            <nav className='navContainer'>
                <ul className='listContainer'>
                    <Link to="/about"><li>À propos</li></Link>
                    <Link to="/products"><li>Produits</li></Link>
                    <Link to="/contact"><li>Contact</li></Link>

                    


                </ul>
            </nav>
        
        </>
    )
}