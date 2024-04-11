import Books from "./Book";
import React from "react";
import  Book from "./Books.json"
// const book = [{
//     image: "https://m.media-amazon.com/images/I/811wuvCKC2S._AC_UY327_FMwebp_QL65_.jpg",
//     title: "The Power of Subconsious Mind",
//     author: "Joseph Murphy",
//     price: "100",
// }, {
//     image: "https://m.media-amazon.com/images/I/51bVNTqHFlL._AC_UY327_FMwebp_QL65_.jpg",
//     title: "The Alchemist",
//     author: "Paulo Coelho",
//     price: "299",
// }, {
//     image: "https://images-eu.ssl-images-amazon.com/images/I/41r6F2LRf8L._AC_UL900_SR900,600_.jpg",
//     title: "The Psychology Of Money",
//     author: "Morgan Housel",
//     price: "50.75",
// },
// ]
const BookList = () => {
    return (
        <div>
            {Book.map((item) => {
                return <Books image={item.image}
                    title={item.title}
                    author={item.author}
                    price={item.price}
                     />
            })}

        </div>
    );
};

export default BookList;