import './post.css';
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';

function Postpage() {

    const {userId}=useParams()
    const [posts, setPosts]=useState([])


    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then((res)=>res.json())
        .then((data)=>setPosts(data))
        .catch((err)=>(err))
    },[userId])
    console.log(posts);

    return(
        <>
        <div className='post-page'>
            Postga utdingiz
            <ul>
                {
                    posts.map((post)=>(
                        <li>
                            {post.body}
                        </li>
                    ))
                }

            </ul>

        </div>
        </>
    )
    
}
export default Postpage;