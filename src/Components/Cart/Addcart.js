import React from 'react';
import { useCart } from '../CartContext/CartContext';
import { Link } from 'react-router-dom';

const Addcart = () => {
  const { cart, removeFromCart, totalPrice, addToCart, clearCart } = useCart();

  
  return (
    <div className="container mt-5">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <div className="alert alert-info">No items in cart.</div>
      ) : (
        <>
          {cart.map((item) =>  {
            
          return(
            <div
              key={item._id}
              className="d-flex align-items-center border-bottom py-3"
            >
                
                
              <img
                src={item.image}
                alt={item.name}
                style={{ width: '100px', height: '150px', objectFit: 'cover' }}
                className="me-3"
              />
              <div>
                <h5>{item.name}</h5>
                <p>Price: ₹{item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button
                  className="btn btn-sm btn-info "style={{marginRight:"40px"}}
                  onClick={() => addToCart(item)}
                >
                  Add One
                </button>
                <button
                  className="btn btn-sm btn-success"
                  onClick={() => removeFromCart(item)}
                >
                  Remove One
                </button>
              </div>
            </div>
          )})}
          <h4 className="mt-4">Total: ₹{totalPrice}</h4>
        </>
      )}

      <button
  type="button"
  onClick={() => alert('Payment Successful!')}
  style={{ color: "white", backgroundColor: "green", padding: "10px 20px", border: "none", borderRadius: "5px" }}
>
  Pay Now
</button>
<button className='btn btn-outline-danger me-3' onClick={clearCart}>Clearall</button>


      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
  <Link to="/" className="btn btn-primary mt-3">
    ← Back to Products
  </Link>
</div>

    </div>
  );
};

export default Addcart;
