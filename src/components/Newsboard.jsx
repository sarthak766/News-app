import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem';
const Newsboard = ({category}) => {
    const [articles,setArticle]= useState([]);
    const fetchdata = async () =>{
       let resp= await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=73c55160173544e291dfa2d29ba976c2`)
       let data = await resp.json();
       setArticle(data.articles);
    }
    useEffect(()=>{
        fetchdata();
    },[category])
   
  return (
    <>
     <h1 className='text-center'>Latest <span className='badge bg-danger'>News</span></h1>
     <div>
        {
           articles.map((ele)=>{
              return <Newsitem title={ele.title} description={ele.description} src={ele.urlToImage} url={ele.url}/>
           })
        }
     </div>
    </>    
  )
}

export default Newsboard
