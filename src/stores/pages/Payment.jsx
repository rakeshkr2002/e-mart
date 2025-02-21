import React, { useContext, useState } from "react";
import { cartContext } from "../context/CardContext";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { CircleLoader } from "react-spinners";

const Payment = () => {
  const { finalPrice, completePayment } = useContext(cartContext);
  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = (formData) => {
    const errors = {};
    if (!formData.cardNumber) {
      errors.cardNumber = "Card Number is required";
    } else if (!/^\d{16}$/.test(formData.cardNumber)) {
      errors.cardNumber = "Card Number must be 16 digits";
    }

    if (!formData.expiryDate) {
      errors.expiryDate = "Expiry Date is required";
    } else if (!/^\d{2}\/\d{2}$/.test(formData.expiryDate)) {
      errors.expiryDate = "Expiry Date must be in MM/YY format";
    }

    if (!formData.cvv) {
      errors.cvv = "CVV is required";
    } else if (!/^\d{3}$/.test(formData.cvv)) {
      errors.cvv = "CVV must be 3 digits";
    }

    if (!formData.cardHolderName) {
      errors.cardHolderName = "Card Holder Name is required";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      cardNumber: e.target.cardNumber.value,
      expiryDate: e.target.expiryDate.value,
      cvv: e.target.cvv.value,
      cardHolderName: e.target.cardHolderName.value,
    };

    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      completePayment();
      navigate("/orders");
    }, 7000);
  };

  return (
    <>
      <Navbar />
      <div className="payment-container">
        <h2>Payment Page</h2>
        <div className="payment-details">
          <h3>Total Amount to be Paid: {finalPrice}$</h3>
          {loading ? (
            <div className="loading">
              Payment Processing... <CircleLoader />
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="cardNumber">Card Number</label>
                <input type="text" id="cardNumber" name="cardNumber" required />
                {formErrors.cardNumber && <p className="error">{formErrors.cardNumber}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="expiryDate">Expiry Date</label>
                <input type="text" id="expiryDate" name="expiryDate" required />
                {formErrors.expiryDate && <p className="error">{formErrors.expiryDate}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="cvv">CVV</label>
                <input type="text" id="cvv" name="cvv" required />
                {formErrors.cvv && <p className="error">{formErrors.cvv}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="cardHolderName">Card Holder Name</label>
                <input type="text" id="cardHolderName" name="cardHolderName" required />
                {formErrors.cardHolderName && <p className="error">{formErrors.cardHolderName}</p>}
              </div>
              <button type="submit" className="payment-button">Pay Now</button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default Payment;