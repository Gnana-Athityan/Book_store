import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Create() {
    const [Title,settitle] = useState('')
    const [author,setauthor] = useState('')
    const [price,setprice] = useState('')
    const navigate = useNavigate()
    const handlebooks =()=>{
        const data ={
            Title,
            author,
            price
        }
        // axios.defaults.withCredentials = true;
        axios.post('https://book-store-two-peach.vercel.app/books',data)
        .then(()=>{
            console.log('post create then')
            navigate('/')
        }).catch((err)=>{
            console.log('post create catch')
            console.log(err)
        
        })
    }
  return (
    <div>
      <label>Title</label><br></br>
        <input type='text' value={Title} onChange={(e)=>settitle(e.target.value)}/><br></br>
        <label>Author</label><br></br>
        <input type='text' value={author} onChange={(e)=>setauthor(e.target.value)}/><br></br>
        <label>Price</label><br></br>
        <input type='text' value={price} onChange={(e)=>setprice(e.target.value)}/><br></br>
        <button onClick={handlebooks}>Create</button>
    </div>
  )
}

export default Create
