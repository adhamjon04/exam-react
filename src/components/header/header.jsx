import './header.css';

//images header logo
import Logo from '../../assets/images/logo.png';
import Loop from '../../assets/images/searchloop.png';

import { Link } from 'react-router-dom';
import { useState } from 'react';






function Header() {
  const [isOpen, setIsOpen ]=useState(true)

    return(
        <>
        <header>
            <div className='logo-link'>
                <Link   to={'/'}><img className='logo-img' src={Logo} alt="logoimg" width={'58'} height={'58'} /></Link>
                <Link className='link-name' to={'/'}> <h1 className='name'>BoburBlog</h1> </Link>
            </div>
            <nav className='navbar'>
               {isOpen&&
                <ul className='nav-list lists'>
                <li className='nav-item'>
                    <Link className='nav-link' to={'/'}>All</Link>
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
                
            </ul> 
               }
               
                <button className='header-btn' onClick={()=>setIsOpen(!isOpen)}>
                    <span className='toggle'></span>
                    </button>
                <li className='input'>
                        <input className='nav-input' type="text"  placeholder='Search' />
                        <img className='nav-loop' src={Loop} alt="" />
                </li>
            </nav>

        </header>
            
    

        </>
    )
    
}
export default Header;
