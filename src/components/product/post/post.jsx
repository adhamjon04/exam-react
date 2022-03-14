import './post.css';
import {  useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';

//post image...

import Body from '../../../assets/images/body.png'
import Groups from '../../../assets/images/group.png'


function Postpage() {

    const {userId}=useParams()
    const [posts, setPosts]=useState([])

    const navigate=useNavigate()

   useEffect(()=>{
    if(isNaN(userId-1)||(userId-1)>100){
       navigate('/err')
    }

   })
  
   

    
    


    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
        .then((res)=>res.json())
        .then((data)=>setPosts(data))
        .catch((err)=>(err))

       
    },[userId])


    return(
        <>
        <div className='post-page'>
            
            <ul className='post-list'>
                <li>
                    <img className='group' src={Groups} alt="" />
                </li>           
                <li className='post-item' key={posts.id} post={posts}>
                    <p className='post-id'>User interface - {posts.id}</p>
                    <hr />
                    <h3 className='post-title'>{posts.title}</h3>
                    <p className='post-time'>October 24, 2020  ⌚️  3 minutes read</p>
                    <img className='post-img' src={Body} alt="body images" />
                    <p className='post-body'>{posts.body}</p>
                </li>
            </ul>

            


        </div>
        </>
    )
    
}
export default Postpage;