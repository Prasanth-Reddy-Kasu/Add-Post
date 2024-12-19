import React, { useContext, useEffect } from 'react'
import Ct from './Ct'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import Allpost from './Allpost'

const Home = () => {
  let obj=useContext(Ct)
  let navigate=useNavigate()
  useEffect(()=>{
    if(obj.data.token=="")
    {
      navigate("/login")
    }

  },[])
  return (
    <div className='con'>
      <div className='sidmenu'>
        <Link to="/">All posts</Link>
        <Link to="/me">Add By Me</Link>
        <Link to="/news">News</Link>
        <Link to="/edu">Education</Link>
        <Link to="/sports">Sports</Link>
        <Link to="/movies">Movies</Link>

      </div>
      <div className='maincont'>
        
        <Outlet/>
      </div>
      <div className='adv'>

      </div>

    </div>
  )
}

export default Home
