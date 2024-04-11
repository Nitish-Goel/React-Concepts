import React from "react";
import './Book.css';


const Books = (props) => {
    const { image, title, author, price } = props;
    return (
        
            <div className="book">
                {/* {console.log(props)} */}

                <div className="book-img">
                    <img src={/*"https://m.media-amazon.com/images/I/811wuvCKC2S._AC_UY327_FMwebp_QL65_.jpg"*/ image} />
                </div>

                <div className="book-info">
                    {/* <h2>The Power of Subconsious Mind props.title</h2> */}
                    <h2>{/*The Power of Subconsious Mind*/ title}</h2>
                    <p className="book-author">by{author} </p>
                    <p className="book-price">${price}</p>
                    <button>Add to Cart</button>
                </div>

            </div>
        
    )
}

export default Books;