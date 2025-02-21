import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { menData } from "../data/men";
import { Link } from 'react-router-dom';

const MensPage = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);

  const companyHandle = (product) => {
    if (selectedProduct.includes(product)) {
      setSelectedProduct(selectedProduct.filter(item => item !== product));
    } else {
      setSelectedProduct([...selectedProduct, product]);
    }
  };

  const filteredProduct = selectedProduct.length === 0
    ? menData
    : menData.filter(selpro => selectedProduct.includes(selpro.brand));

  return (
    <>
      <div className="fullpage">
        <div className="pro-selected">
          {Array.from(new Set(menData.map(item => item.brand))).map(company => (
            <div key={company} className='pro-input'>
              <label>
                <input
                  type="checkbox"
                  checked={selectedProduct.includes(company)}
                  onChange={() => companyHandle(company)}
                />
                {company}
              </label>
            </div>
          ))}
        </div>

        <div className='pageSection'>
          {filteredProduct.map(item => (
            <div key={item.id}>
              <Link to={`/mens/${item.id}`}>
                <div className="pageImg">
                  <img src={item.image} alt={item.model} />
                </div>
              </Link>
              <div className="proModel">
                {item.brand}, {item.model}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MensPage;