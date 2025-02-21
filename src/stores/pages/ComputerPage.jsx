import React, { useState } from 'react';
import { computerData } from '../data/computers';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const ComputerPage = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);

  const companyHandle = (product) => {
    if (selectedProduct.includes(product)) {
      setSelectedProduct(selectedProduct.filter(item => item !== product));
    } else {
      setSelectedProduct([...selectedProduct, product]);
    }
  };

  const filteredProduct = selectedProduct.length === 0
    ? computerData
    : computerData.filter(selpro => selectedProduct.includes(selpro.company));

  return (
    <>
      <div className="fullpage">
        <div className="pro-selected">
          {
            computerData.map((phone)=>{
              return (
                <div key={phone.id} className='pro-input'>
                    <label htmlFor="">
                      <input type="checkbox" 
                      checked={selectedProduct.includes(phone.company)}
                      onChange={()=>companyHandle(phone.company)}
                      />
          {phone.company}
                    </label>
                </div>
              )
            })
          }
        </div>

        <div className='pageSection'>
          {filteredProduct.map(item => (
            <div key={item.id}>
              <Link to={`/computers/${item.id}`}>
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

export default ComputerPage;