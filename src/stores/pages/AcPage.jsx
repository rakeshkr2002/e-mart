import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { acData } from '../data/ac';
import { Link } from 'react-router-dom';

const AcPage = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);

  const companyHandle = (product) => {
    if (selectedProduct.includes(product)) {
      setSelectedProduct(selectedProduct.filter(item => item !== product));
    } else {
      setSelectedProduct([...selectedProduct, product]);
    }
  };

  const filteredProduct = selectedProduct.length === 0
    ? acData
    : acData.filter(selpro => selectedProduct.includes(selpro.company));

  return (
    <>
      <div className="fullpage">
        <div className="pro-selected">
          {Array.from(new Set(acData.map(item => item.company))).map(company => (
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
              <Link to={`/ac/${item.id}`}>
                <div className="pageImg">
                  <img src={item.image} alt={item.model} />
                </div>
              </Link>
              <div className="proModel">
                {item.company}, {item.model}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AcPage;