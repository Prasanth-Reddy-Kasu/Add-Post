import React, { useContext,useEffect, useState } from 'react'
import Ct from './Ct'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Add = () => {
  let obj=useContext(Ct)
  let navigate=useNavigate()
  let [post,setPost]=useState({"title":"","body":"","cat":""})
  let [msg,setMsg]=useState("")
  useEffect(()=>{
    if(obj.data.token=="")
    {
      navigate("/login")
    }

  },[])
  let fun=(e)=>{
    setPost({...post,[e.target.name]:e.target.value})
  }
  let add=()=>{
    axios.post("http://localhost:5000/addpost",{...post,"uid":obj.data._id,"name":obj.data.name,"date":new Date().toLocaleDateString()}).then((res)=>{
      setMsg(res.data.msg)
      setPost({"title":"","body":"","cat":""})
    })
  }
  return (
    <div className='formcon'>
      <div className='form'>
      <div className='heading'>Add Post</div>
        <div className='msg'>{msg}</div>
        <div className='inp-form'>
        <input type='text' placeholder='enter title' name="title" onChange={fun} value={post.title}/>
        </div>
        <div className='text-area'>
        <textarea name="body" onChange={fun} value={post.body} className='txtarea'></textarea>
        </div>
        <select name="cat" value={post.cat} onChange={fun}>
          <option value="" selected disabled>Select cat</option>
          <option value="edu">Education</option>
          <option value="ent">Movies</option>
          <option value="sports">Sports</option>
          <option value="news">News</option>
        </select>
        <button onClick={add}>Add Post</button>


      </div>

    </div>
  )
}

export default Add
