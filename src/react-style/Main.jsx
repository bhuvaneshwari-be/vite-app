import{ Routes, Route} from 'react-router-dom';
import Home from '../react-style/Home';
import Books from '../react-style/Books';
import About from '../react-style/About';
import Login from '../react-style/Login'
import NavBar from './NavBar';
import ProtectedRoute from './ProtectedRoute';
import Cart from '../react-style/Cart'

export default function Main(){
    return(
        <>
           <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/books" element={
                    <ProtectedRoute>
                        <Books/>
                    </ProtectedRoute>
                    }/>
                <Route path="/about" element={<About/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/cart" element={<Cart/>}/>
            </Routes> 
        </>
    )
}