import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Ct from './Ct'

const Nav = () => {
  let obj=useContext(Ct)
  return (
    <div className='nav'>
      {obj.data.token!=""&&<Link to="/">Home</Link>}
        {obj.data.token!=""&&<Link to ="/add">Add Post</Link>}
        {obj.data.token==""&&<Link to="/login">Log In</Link>}
        {obj.data.token==""&&<Link to="/reg">Sign Up</Link>}
        {obj.data.token!=""&&<Link to="/logOut">Log Out</Link>}
        {<div id="usernamelogin">{obj.data.name}</div>}
    </div>
  )
}

export default Nav
