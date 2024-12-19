import axios from 'axios'
import React, { useEffect, useState } from 'react'


const Sports = () => {
  let [posts,setPosts]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:5000/getpost/cat/sports").then((res)=>{
      setPosts(res.data)
    })

  },[])

return (
  <div className='newscon'>
  {
    posts.map((item)=>{
      return(<div className='postcon'>
        <div className='postConMarg'>
        <div className='h2'>{item.title}</div>
        
        <div className='p'>{item.body}</div>
        <div className='postedBy'>
        <h3>Posted By:{item.name}</h3>
        <h3>{new Date().toLocaleDateString('en-GB')}</h3>
        </div>
        </div>
        </div>)
    })
  }

  </div>
)
}

export default Sports
