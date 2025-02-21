import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { booksData } from '../data/books';
import { Link } from 'react-router-dom';

const BooksPage = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);

  const companyHandle = (product) => {
    if (selectedProduct.includes(product)) {
      setSelectedProduct(selectedProduct.filter(item => item !== product));
    } else {
      setSelectedProduct([...selectedProduct, product]);
    }
  };

  const filteredProduct = selectedProduct.length === 0
    ? booksData
    : booksData.filter(selpro => selectedProduct.includes(selpro.title));

  return (
    <>
      <div className="fullpage">
         <div className="pro-selected">
                  {
                    booksData.map((phone)=>{
                      return (
                        <div key={phone.id} className='pro-input'>
                            <label htmlFor="">
                              <input type="checkbox" 
                              checked={selectedProduct.includes(phone.title)}
                              onChange={()=>companyHandle(phone.title)}
                              />
                  {phone.title}
                            </label>
                        </div>
                      )
                    })
                  }
                </div>

        <div className='pageSection'>
          {filteredProduct.map(item => (
            <div key={item.id}>
              <Link to={`/books/${item.id}`}>
                <div className="pageImg">
                  <img src={item.image} alt={item.model} />
                </div>
              </Link>
              <div className="proModel">
                {item.title}, {item.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BooksPage;