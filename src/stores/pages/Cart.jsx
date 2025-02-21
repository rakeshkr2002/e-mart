import React, { useContext,  useEffect } from "react";
import { cartContext } from "../context/CardContext";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart ,setTotal,setDeliveryFee,setFinalPrice,total,finalPrice,deliveryFee } = useContext(cartContext);
  
let nav = useNavigate();
  useEffect(() => {
    handleTotal();
  }, [cartItems]);

  useEffect(() => {
    handleDeliveryFee();
  }, [total]);

  const handleTotal = () => {
    let totalAmount = 0;
    cartItems.forEach((item) => {
      totalAmount += Number(item.price);
    });
    setTotal(totalAmount.toFixed(2));
  };

  const handleDeliveryFee = () => {
    if (total <500) {
      setDeliveryFee(20)
      setFinalPrice((parseFloat(total)+20).toFixed(2))
    }
    else if (total < 1000) {
      setDeliveryFee(40);
      setFinalPrice((parseFloat(total) + 40).toFixed(2));
    } else {
      setDeliveryFee(0);
      setFinalPrice(parseFloat(total).toFixed(2));
    }
  };

  return (
    <>
      <Navbar />
      <h2 className="empty">
        {cartItems.length == 0 ? "Your Cart is empty" : "Welcome to cart "}
      </h2>
      <div className="mainCart">
        <div className="cartDetail">
          {cartItems.map((item) => (
            <div className="cart-section" key={item.id}>
              <div className="cart-img">
                <img src={item.image} alt={item.product} />
              </div>
              <div className="cart-details">
                <h3>{item.product}</h3>
                <h2>{item.price}</h2>
                <h3>{item.model}</h3>
              </div>
              <div>
                <button
                  className="removeBtn"
                  onClick={() => removeFromCart(item)}
                >
                  remove
                </button>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length !== 0 && (
          <>
            <div className="totalPrice">
              <div className="contentTP">
                <div className="contentTp1">
                  <h1>MRP :</h1>
                </div>
                <div className="contentTp1">
                  <h1>Delivery Fee :</h1>
                </div>
                <div className="contentTp1">
                  <h1>Total:</h1>
                </div>
              </div>
              <div className="ContentPrice">
                <div className="contentTp2">
                  <h1>{total + "$"}</h1>
                </div>
                <div className="contentTp2">
                  <h1>{deliveryFee + "$"}</h1>
                </div>
                <div className="contentTp2">
                  <h1>{finalPrice + "$"}</h1>
                </div>
                <button  onClick={()=>nav("/payment")}>Check-out</button>
              </div>
              
            </div>
            
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
