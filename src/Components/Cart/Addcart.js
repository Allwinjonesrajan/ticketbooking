import React from 'react';
import { useCart } from '../CartContext/CartContext';
import { Link } from 'react-router-dom';

const Addcart = () => {
  const { cart, removeFromCart, totalPrice, addToCart, clearCart } = useCart();

  return (
    <div className="container mt-5">
      <h2 style={{ textAlign: 'center', color: '#0072ff', fontWeight: 'bold', marginBottom: '30px' }}>
        🛒 Your Shopping Cart
      </h2>

      {cart.length === 0 ? (
        <div className="alert alert-info text-center">No items in cart.</div>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item._id}
              className="d-flex flex-wrap align-items-center border rounded shadow-sm p-3 mb-4"
              style={{ background: '#f9f9f9' }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: '200px',
                  height: '300px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                  marginRight: '20px',
                }}
              />
              <div>
                <h4 style={{ fontWeight: 'bold', color: '#333' }}>{item.name}</h4>
                <p style={{ margin: '5px 0' }}>
                  <strong>Price:</strong> ₹{item.price}
                </p>
                <p style={{ margin: '5px 0' }}>
                  <strong>Quantity:</strong> {item.quantity}
                </p>

                <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
                  <button
                    className="btn btn-sm"
                    style={{
                      backgroundColor: '#4caf50',
                      color: 'white',
                      fontWeight: 'bold',
                    }}
                    onClick={() => addToCart(item)}
                  >
                    ➕ Add One
                  </button>
                  <button
                    className="btn btn-sm"
                    style={{
                      backgroundColor: '#f44336',
                      color: 'white',
                      fontWeight: 'bold',
                    }}
                    onClick={() => removeFromCart(item)}
                  >
                    ➖ Remove One
                  </button>
                </div>
              </div>
            </div>
          ))}

          <h4 style={{ textAlign: 'right', color: '#222' }}>
            🧾 <strong>Total:</strong> ₹{totalPrice}
          </h4>
        </>
      )}

      {cart.length > 0 && (
        <div className="d-flex justify-content-between align-items-center mt-4">
          <div>
            <button
              className="btn"
              onClick={() => {
                alert('✅ Payment Successful!');
                clearCart();
              }}
              style={{
                backgroundColor: '#0072ff',
                color: 'white',
                fontWeight: 'bold',
                marginRight: '15px',
              }}
            >
              💳 Pay Now
            </button>
            <button
              className="btn btn-outline-danger"
              onClick={clearCart}
              style={{ fontWeight: 'bold' }}
            >
              🗑️ Clear All
            </button>
          </div>

          <Link to="/home" className="btn btn-success" style={{ fontWeight: 'bold' }}>
            ← Back to Products
          </Link>
        </div>
      )}
    </div>
  );
};

export default Addcart;
