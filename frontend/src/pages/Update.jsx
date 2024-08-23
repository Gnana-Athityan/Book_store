import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import '../index.css'

function Update() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [Title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [price, setPrice] = useState('')
  // axios.defaults.withCredentials = true;

  useEffect(()=>{
    axios.get(`https://book-store-two-peach.vercel.app/books/${id}`).then((res)=>{
      setTitle(res.data[0].Title)
      setAuthor(res.data[0].author)
      setPrice(res.data[0].price)
    }).catch((err)=>{
      console.log(err)
    })
  },[])
  const HandleUpdate = ()=>{
    const data = {
      Title,
      author,
      price
    }
    
    axios.put(`https://book-store-two-peach.vercel.app/books/${id}`, data).then(
      ()=>{
        navigate('/')
      }
    ).catch((err)=>{
      console.log(err)
    })
  }
  return (
      <div >
      <button className='but' style={{textAlign: 'center', marginLeft:'700px', marginBottom:'50px'}}>Home Page</button>
      <div className='form1'>
        <label htmlFor="Title">Name</label>
        <input type="text" value={Title} onChange={(e)=>setTitle(e.target.value)}/><br></br>
        <label htmlFor="Title">Author</label>
        <input type="text" value={author} onChange={(e)=>setAuthor(e.target.value)}/><br></br>
        <label htmlFor="Title">Value</label>
        <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)}/><br></br>
        <button onClick={HandleUpdate}>Update</button>
      </div>
      </div>
  )
}

export default Update
