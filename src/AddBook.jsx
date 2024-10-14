import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addBooks } from './api'

const AddBook = () => {
  const [bookName,setBookName] = useState('')
  const [author,setAuthor] = useState('')
  const [status,setStatus] = useState('YES')
  const [error,setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) =>{
    e.preventDefault();
  
   if (!bookName || !author){
    setError("please fill out all fields!!!")
    return;
   }

   const newBook = {bookName,author,status}
   await addBooks(newBook)
   navigate('/')
  }

  return (
    <>
      <div style={{paddingLeft: '200px', paddingRight: '200px'}} className='mt-5'>
        <h1 className='text-light'>ADD BOOKS :</h1>

        <form onSubmit={handleSubmit} style={{ paddingLeft: '90px', paddingTop: '30px' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <label className='text-light fw-bolder fs-5' style={{ width: '200px', marginRight: '10px' }}>BOOK NAME :</label>
            <input value={bookName} onChange={(e)=>setBookName(e.target.value)} className='form-control' style={{width:'800px'}} type="text" />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <label className='text-light fw-bolder fs-5' style={{ width: '200px', marginRight: '10px' }}>AUTHOR :</label>
            <input value={author} onChange={(e)=>setAuthor(e.target.value)} className='form-control' style={{width:'800px'}} type="text" />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <label className='text-light fw-bolder fs-5' style={{ width: '200px', marginRight: '10px' }}>AVAILABLE :</label>
            <select  value={status} onChange={(e)=>setStatus(e.target.value)} className='form-control' style={{width:'800px'}}>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
            </select>
          </div>
          {error && <p className='py-3 text-center text-warning' style={{fontSize:'30px'}}>{error}</p>}

          <button style={{paddingLeft:'500px'}} className='px-5 py-1 rounded fw-bolder'>ADD BOOKS</button>

        </form>
      </div>
    </>
  )
}

export default AddBook