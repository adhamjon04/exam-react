import './liftsite.css';
import { Link } from 'react-router-dom';

//leftsite images...
import Arrow from '../../../assets/images/arrow.png'
import Facebook from '../../../assets/images/facebook.png'
import Git from '../../../assets/images/git.png'
import Twitter from '../../../assets/images/twitter.png'
import Linkedin from '../../../assets/images/linkedin.png'





function Liftsite() {
    return(
        <>
        <div className='leftsite'>
            <h2 className='left-title'>What I do!</h2>
            <p className='left-text'>
                Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Integer aliquet,
                orci in bibendum luctus, turpis
                ante pretium velit,
                eu rutrum augue erat ac eros.
                Cras ultricies mattis convallis.
            </p>
            <div className='explore-list'>
                <p>EXPLORE ME</p>
                <Link className='arrow-link' to={'/'} ><img className='exp-arrow' src={Arrow} alt="" /></Link>
            </div>
            <ul className='social-list'>
                <li className='social-item'>
                    <img src={Facebook} alt="facebook" />
                </li>
                <li className='social-item'>
                    <img src={Git} alt="git" />
                </li>
                <li className='social-item'>
                    <img src={Twitter} alt="twitter" />
                </li>
                <li className='social-item'>
                    <img src={Linkedin} alt="linkedin" />
                </li>
            </ul>
        </div>
       
        </>
    )
    
}
export default Liftsite;