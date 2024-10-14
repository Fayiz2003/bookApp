import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getBooks,deleteBooks } from './api'

const BookView = () => {
    const [books,setBooks] = useState([])

    useEffect(() => {
        const fetchBooks = async () => {
            const data = await getBooks();
            setBooks(data);
        };
        fetchBooks();
    },[])   
    
    const handleDelete = async (id) =>{
        await deleteBooks(id)
        setBooks(books.filter((item) => item.id !== id))
    }
    
  return (
    <>
    <div style={{paddingLeft:'200px'}} className='mt-5'>
        <h1 className='text-light'>BOOKS LIST :</h1>
        <Link to="/add" className='btn px-5 py-1 rounded fw-bolder bg-light text-dark'>ADD BOOKS</Link>
        <table className='ms-2 mt-5 bg-white p-5'>
            <thead>
                <tr>
                    <th className='th'>ID</th>
                    <th className='th'>BOOK NAME</th>
                    <th className='th'>AUTHOR</th>
                    <th className='th'>AVAILABLE</th>
                    <th className='th'>ACTION</th>
                </tr>
            </thead>
            <tbody>
                {
                    books.map((item) => (
                    <tr key={item.id}>
                        <td className='th'>{item.id}</td>
                        <td className='th'>{item.bookName}</td>
                        <td className='th'>{item.author}</td>
                        <td className='th'>{item.status}</td>
                        <td className='th'>
                            <Link className='fs-5' to={`/edit/${item.id}`}>Edit</Link>
                            <button onClick={()=>handleDelete(item.id)} style={{marginLeft:'100px'}} className='btn'><i className="fa-solid fa-trash text-danger"></i></button>
                        </td>
                    </tr>
                    ))
                }
                
            </tbody>
        </table>
    </div>
    </>
  )
}

export default BookView