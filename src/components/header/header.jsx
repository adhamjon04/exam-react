import './header.css';

//images header logo
import Logo from '../../assets/images/logo.png';
import Loop from '../../assets/images/searchloop.png';

import { Link } from 'react-router-dom';


function Header() {
    return(
        <>
        <header>
            <div className='logo-link'>
                <Link  to={'/'}><img src={Logo} alt="logoimg" /></Link>
                <Link className='link-name' to={'/'}><h1 className='name'>BoburBlog</h1></Link>
            </div>
            <nav className='navbar'>
                <ul className='nav-list'>
                    <li className='nav-item'>
                        <Link className='nav-link' to={'/all'}>All</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to={'/design'}>Design Theory</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to={'/ux'}>UX</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to={'/ui'}>UI</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to={'/typog'}>Typography</Link>
                    </li>
                    <li>
                        <input className='nav-input' type="text"  placeholder='Search' />
                        <img className='nav-loop' src={Loop} alt="" />
                    </li>
                </ul>  
            </nav>

        </header>
            
    

        </>
    )
    
}
export default Header;