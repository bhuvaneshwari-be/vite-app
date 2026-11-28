import { lazy,Suspense } from "react";
import { Routes, Route } from "react-router-dom"
import NavBar from "./NavBar";

const Home = lazy(() => import ("./Home"));
const About = lazy(() => import ("./About"));
const Contact = lazy(() => import ("./Contact"));

export default function App(){
    return(
        <>
            <NavBar/>

        <Suspense fallback={<h3>Loading....</h3>}>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
            </Routes>
        </Suspense>
        </>
    )     
}