import React, { useContext } from "react";
import { watchData } from "../stores/data/watch"; // Assuming you have a similar data file for watches
import { useParams } from "react-router-dom";
import Navbar from "../stores/components/Navbar";
import { cartContext } from "../stores/context/CardContext";

const WatchesSingle = () => {
  const { id } = useParams();
  const product = watchData.find((item) => item.id === id);
  console.log(id);

  const { addToCart } = useContext(cartContext);

  return (
    <>
      <Navbar />
      <div className="ind-Section">
        <div className="ind-image">
          <img src={product.image} alt={product.model} />
        </div>

        <div className="ind-details space">
          <div className="ind-name">
            <h2>{product.brand}</h2>
          </div>
          <div className="ind-model space">
            <h3>{product.model}</h3>
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

export default WatchesSingle;