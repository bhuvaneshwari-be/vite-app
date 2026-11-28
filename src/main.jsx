import { StrictMode } from 'react'
import { BrowserRouter} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import BookCard from '../src/react-style/BookCard.jsx'
import NavBar from '../src/react-style/NavBar.jsx'
import './App.css'
import Main from '../src/react-style/Main.jsx'
import { CartProvider } from './react-style/CartContext.jsx'


createRoot(document.getElementById('root')).render(
  <div>
    <BrowserRouter>
      <CartProvider>
        <Main />
      </CartProvider>
    </BrowserRouter>
  </div>
)
