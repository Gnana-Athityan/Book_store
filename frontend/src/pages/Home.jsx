import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../index.css'

export default function Home() {
    const [data, setData] = useState([])
    const[loading,setloading] = useState(false)
    // axios.defaults.withCredentials = true;

    useEffect(()=>{
        setloading(true)
        axios.get('https://book-store-two-peach.vercel.app/books')
        // axios.get('http://localhost:3000/books')
        .then((res)=>{
            setData(res.data)
            console.log(res.data)
            setloading(false)
        }).catch((err)=>{
            console.log(err)
        })
    },[])
  return (
    <div>
      <center>
    <div>
      <h1><Link to = '/create'><button className='but'>Create</button></Link></h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Author</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {data.map((book, key)=>{
                return(
                <tr key={book.id}>
                    <td>{book.Title}</td>
                    <td>{book.author}</td>
                    <td>{book.price}</td>
                    <td>
                        <button className='but'><Link style={{color: 'white'}} to={`/update/${book._id}`}>Update</Link></button>
                        <button className='but'><Link style={{color: 'white'}} to={`/delete/${book._id}`}>Delete</Link></button>
                    </td>
                </tr>
                )
            })}
        </tbody>
      </table>
    </div>
    </center>
    </div>
  )
}
