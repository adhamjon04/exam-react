import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import './restsite.css';



const renderData=(users)=>{
    return(
        <ul className='user-list-rest'>
        {
            users.map((user)=>(
                <li className='user-item' key={user.id}>
                 <Link className='rest-link' to={`/post/${user.id}`}>
                 <h5 className='user-date'>September 24.2020</h5>
                <p className='user-text'>{user.title}</p>
                <h6 className='user-time'>⏰  3 minutes read</h6>
                 </Link>   
                
                                                
                </li>
            ))
        }
    </ul>
        
    );
}

function Restsite() {
    const [users, setUsers]=useState([])
    



    const [currentPage, setcurrentPage]=useState([1])
    const [itemsPerPage, ]=useState([10])

    const [pageNumberLimit, ]=useState(5)
    const [maxPageNumberLimit, setmaxPageNumberLimit]=useState(5)
    const [minPageNumberLimit, setminPageNumberLimit]=useState(0)


    const handleClick=(evt)=>{
        setcurrentPage(Number(evt.target.id))
    };

    const pages=[];
    for(let i=1; i<=Math.ceil(users.length/itemsPerPage); i++){
        pages.push(i);
    }

    const indexOfLastItem=currentPage*itemsPerPage;
    const indexOfFirstItem=indexOfLastItem-itemsPerPage;
    const currentItems=users.slice(indexOfFirstItem, indexOfLastItem);
    const renderPageNumber=pages.map((number)=>{
      if(number<maxPageNumberLimit+1 && number>minPageNumberLimit){
      return(
        <li key={number} id={number} onClick={handleClick} className={currentPage===number ? "active": null }>
            {number}
           
             
        </li>
    );
      }else{
          return null;
      }
    });

    

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res)=> res.json())
        .then((data)=> setUsers(data))
        .catch((err)=>(err))
        

    
}, [])

const handleNextbtn =()=>{
    setcurrentPage(currentPage+1)
    if(currentPage+1>maxPageNumberLimit){
        setmaxPageNumberLimit(maxPageNumberLimit+pageNumberLimit)
        setminPageNumberLimit(minPageNumberLimit+pageNumberLimit)
    }
};
const handlePrevbtn =()=>{
    setcurrentPage(currentPage-1)
    if((currentPage-1)%pageNumberLimit===0){
        setmaxPageNumberLimit(maxPageNumberLimit-pageNumberLimit)
        setminPageNumberLimit(minPageNumberLimit-pageNumberLimit)
    }   
}
 return(
        <>
        <div className='restsite'>
					<h2 className='user-title'>Recent Posts</h2>
                    {renderData(currentItems)}
                    <ul className='render-number'>
                        <li>
                            <button onClick={handlePrevbtn}  desabled={currentPage===pages[0]? 'true':'false'} >Prev</button>
                        </li>
                    {renderPageNumber}
                    <li>
                        <button onClick={handleNextbtn} desabled={currentPage===pages[pages.length-1]? 'true' :'false'} >Next</button>
                    </li>
                    </ul>
           

        </div>
        </>
    )
  
    
}
export default Restsite;