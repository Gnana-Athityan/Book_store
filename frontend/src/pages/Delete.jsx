import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function Delete() {
  const { id } = useParams()
  const navigate = useNavigate()
  // axios.defaults.withCredentials = true;

  useEffect(() => {
    axios.delete(`https://book-store-two-peach.vercel.app/books/${id}`)
      .then(() => {
        navigate('/')
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <div>
      <h1>Delete</h1>
    </div>
  )
}

export default Delete
