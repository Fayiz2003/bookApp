import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddBook from './AddBook'
import './App.css'
import BookView from './BookView'
import EditBook from './EditBook'

function App() {

  return (
    <>
      <Router>
      <div className='container text-center'>
        <h1 className='mt-5 fw-bolder text-light'>ADD YOUR BOOKS COLLECTIONS</h1>
      </div>
        <Routes>
          <Route path='/' element={<BookView/>} />
          <Route path='/add' element={<AddBook/>} />
          <Route path='/edit/:id' element={<EditBook/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
