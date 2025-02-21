import React, { useContext } from "react";
import { booksData } from "../stores/data/books"; // Assuming you have a similar data file for books
import { useParams } from "react-router-dom";
import Navbar from "../stores/components/Navbar";
import { cartContext } from "../stores/context/CardContext";

const BooksSingle = () => {
  const { id } = useParams();
  const product = booksData.find((item) => item.id === id);
  console.log(id);

  const { addToCart } = useContext(cartContext);

  return (
    <>
      <Navbar />
      <div className="ind-Section">
        <div className="ind-image">
         
          <img src={product.image} alt={product.title} />
        </div>

        <div className="ind-details space">
          <div className="ind-name">
            <h2>{product.title}</h2>
          </div>
          <div className="ind-author space">
            <h3>{product.author}</h3>
          </div>
          <div className="ind-price space">
            <h2>{product.price}</h2>
          </div>
          <div className="ind-desc space">
            <p>{product.description}</p>
          </div>

          <button onClick={() => addToCart(product)}>Add to cart</button>
        </div>
      </div>
    </>
  );
};

export default BooksSingle;