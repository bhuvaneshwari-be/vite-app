import { useState } from "react";
import B_childComponent from "./B_childComponent";

export default function A_parentComponent(){

    const [bookName, setBookName] = useState("The NoteBook");
    const [bookAuthor, setBookAuthor] = useState("Nicholas Sparks");
    const [bookPrice, setBookPrice] = useState(450);
    const [bookDetails, setBookDetails] = useState({
        genre : "Romance",
        year : "1996",
        rating : 4.5,
        publisher : "Grand Central Publishing",
        extraDetails : {
            language: "English",
            pages: 256
        }
    });

    return(
        <>
            <div>
                <div className="h2 text-center text-primary mt-3">Book Details</div>
            </div>
            <div>
                <B_childComponent
                bookName={bookName}
                bookAuthor={bookAuthor}   
                bookPrice={bookPrice}
                bookDetails={bookDetails}             
                />
            </div>
        </>
        
    )
}