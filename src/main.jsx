import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import BookCard from '../src/react-style/BookCard.jsx'
import NavBar from '../src/react-style/NavBar.jsx'
import './App.css'

createRoot(document.getElementById('root')).render(
  <div>
    <NavBar/>
    <div>
      <h2 className='heading'>Welcome to our BookStore</h2>
    </div>
    <BookCard/>
  </div>
)
