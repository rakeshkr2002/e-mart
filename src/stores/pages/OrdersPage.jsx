import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { cartContext } from '../context/CardContext';

const OrdersPage = () => {
  const { orderItems } = useContext(cartContext);
  const [deliveryDate, setDeliveryDate] = useState('');

  useEffect(() => {
    const calculateDeliveryDate = () => {
      const currentDate = new Date();
      const deliveryDate = new Date(currentDate.setDate(currentDate.getDate() + 3));
      setDeliveryDate(deliveryDate.toDateString());
    };

    calculateDeliveryDate();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="orders-container">
        <h2>Your Orders</h2>
        {orderItems.length === 0 ? (
          <p>No items in your order.</p>
        ) : (
          orderItems.map((item) => (
            <div className="order-item" key={item.id}>
              <div className="order-img">
                <img src={item.image} alt={item.product} />
              </div>
              <div className="order-details">
                <h3>{item.product}</h3>
                <p>Price: {item.price}$</p>
                <p>Model: {item.model}</p>
                <p>Expected Delivery Date: {deliveryDate}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default OrdersPage;