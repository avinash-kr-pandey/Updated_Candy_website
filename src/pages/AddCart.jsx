import React, { useContext } from 'react';
import { Store } from '../context/Store';
import './AddCart.css';
// import React from 'react';
import { useNavigate } from 'react-router-dom';
function AddCart() {
  const { cartItems } = useContext(Store);

  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/fakepaymentgateway');
  };



  return (
    <div className='cart'>
      <h1>Cart</h1>
      <div className="cart-items">
        {cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.imgSrc} alt={item.name} className="product-image" />
            <div className="product-details">
              <p className="product-name">{item.name}</p>
              <p className="product-price">${item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-5 mb-6 self-end">
        <button className="bg-blue-900 text-white rounded-md py-2 px-3">
          CONTINUE SHOPPING
        </button>
        <button className="rounded-md border-2 border-blue-900 py-2 px-3" onClick={handleCheckout}>
          CHECK OUT
        </button>
      </div>
    </div >
  );
}

export default AddCart;
