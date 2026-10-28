import { useState } from "react";

export default function B_childComponent({
    bookName,
    bookAuthor,
    bookPrice,
    bookDetails: {
        genre,
        year,
        rating,
        publisher,
        extraDetails: {
            language,
            pages
        }
    }
}){

    return(
        <>
            <div className="container-fluid">
                <div className="mt-3 ms-3">
                    <span className="fs-3">Name: </span>
                    <span className="fs-4">{bookName}</span>
                </div>

                <div className="mt-3 ms-3">
                    <span className="fs-3">Author: </span>
                    <span className="fs-4">{bookAuthor}</span>
                </div>

                <div className="mt-3 ms-3">
                    <span className="fs-3">Price: </span>
                    <span className="fs-4">{bookPrice}</span>
                </div>

                <div className="mt-3 ms-3">
                    <span className="fs-3">Genre: </span>
                    <span className="fs-4">{genre}</span>
                </div>

                <div className="mt-3 ms-3">
                    <span className="fs-3">Published Year: </span>
                    <span className="fs-4">{year}</span>
                </div>

                <div className="mt-3 ms-3">
                    <span className="fs-3">Rating: </span>
                    <span className="fs-4">{rating}</span>
                </div>

                <div className="mt-3 ms-3">
                    <span className="fs-3">Publisher: </span>
                    <span className="fs-4">{publisher}</span>
                </div>

                <div className="mt-3 ms-3">
                    <span className="fs-3">Pages: </span>
                    <span className="fs-4">{pages}</span>
                </div>

                <div className="mt-3 ms-3">
                    <span className="fs-3">Language: </span>
                    <span className="fs-4">{language}</span>
                </div>
            </div>
        </>
    )
}