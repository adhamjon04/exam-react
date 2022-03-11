import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import './restsite.css';

function Restsite() {

    const [users, setUsers]=useState([])
    

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res)=> res.json())
        .then((data)=> setUsers(data))
        .catch((err)=>(err))
    }, [])



    return(
        <>
        <div className='restsite'>
					<h2 className='user-title'>Recent Posts</h2>
            <ul>
                {
                    users.map((user)=>(
                        <li className='user-item' key={user.id}>
                         <Link className='rest-link' to={`/post/:${user.id}`}>
                         <h5 className='user-date'>September 24.2020</h5>
                        <p className='user-text'>{user.title}</p>
						<h6 className='user-time'>⏰  3 minutes read</h6>
                         </Link>   
						
														
                        </li>
                    ))
                }
            </ul>

        </div>
        </>
    )
    
}
export default Restsite;