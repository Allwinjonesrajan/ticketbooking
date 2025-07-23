import React, { useState } from 'react';
import { useCart } from '../CartContext/CartContext';
import { Link } from 'react-router-dom';

const Addcart = () => {
  const { cart, removeFromCart, totalPrice, addToCart, clearCart } = useCart();
  const [hoveredImage, setHoveredImage] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div
      style={{
        minHeight: '100vh',
        padding: '40px 20px',
        background: 'linear-gradient(120deg, #fceabb 0%, #f8b500 100%)',
        fontFamily: "'Poppins', sans-serif",
        color: '#222',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          color: '#fff',
          fontWeight: '900',
          fontSize: '2.5rem',
          textShadow: '2px 2px 4px rgba(0,0,0,0.4)',
          marginBottom: '40px',
        }}
      >
        🛒 Your Shopping Cart
      </h2>

      {cart.length === 0 ? (
        <>
          <div
            style={{
              backgroundColor: '#ffebee',
              padding: '20px',
              borderRadius: '10px',
              textAlign: 'center',
              color: '#c62828',
              fontWeight: 'bold',
              fontSize: '18px',
              marginBottom: '20px',
            }}
          >
            ⚠️ No items in your cart. Let's go shopping!
          </div>

          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <Link
              to="/home"
              style={{
                backgroundColor: '#00c853',
                color: 'white',
                padding: '14px 28px',
                borderRadius: '10px',
                fontWeight: 'bold',
                textDecoration: 'none',
                fontSize: '16px',
              }}
              onMouseOver={(e) =>
                (e.target.style.backgroundColor = '#009624')
              }
              onMouseOut={(e) =>
                (e.target.style.backgroundColor = '#00c853')
              }
            >
              🛒 Back to Products
            </Link>
          </div>
        </>
      ) : (
        <>
          {cart.map((item, index) => (
            <div
              key={item._id}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                background: 'linear-gradient(145deg, #ffffff, #f5f5f5, #e1f5fe)',
                border: '1px solid #ddd',
                borderRadius: '20px',
                boxShadow:
                  hoveredCard === index
                    ? '0 10px 25px rgba(0, 0, 0, 0.2)'
                    : '0 4px 12px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                padding: '25px',
                marginBottom: '30px',
                transform: hoveredCard === index ? 'scale(1.02)' : 'scale(1)',
                transition: 'all 0.3s ease-in-out',
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                onMouseEnter={() => setHoveredImage(index)}
                onMouseLeave={() => setHoveredImage(null)}
                style={{
                  width: '200px',
                  height: '280px',
                  objectFit: 'cover',
                  borderRadius: '15px',
                  marginRight: '25px',
                  border: '5px solid #0072ff',
                  transform:
                    hoveredImage === index ? 'scale(1.05)' : 'scale(1)',
                  transition: 'transform 0.3s ease-in-out',
                }}
              />
              <div>
                <h4
                  style={{
                    fontWeight: '800',
                    color: '#0072ff',
                    fontSize: '20px',
                  }}
                >
                  🛍️ {item.name}
                </h4>
                <p style={{ fontSize: '16px' }}>
                  💰 <strong>Price:</strong> ₹{item.price}
                </p>
                <p style={{ fontSize: '16px' }}>
                  🔢 <strong>Quantity:</strong> {item.quantity}
                </p>

                <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
                  <button
                    onClick={() => addToCart(item)}
                    style={{
                      backgroundColor: '#43a047',
                      color: 'white',
                      fontWeight: 'bold',
                      padding: '8px 14px',
                      border: 'none',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      transition: '0.3s',
                    }}
                    onMouseOver={(e) =>
                      (e.target.style.backgroundColor = '#2e7d32')
                    }
                    onMouseOut={(e) =>
                      (e.target.style.backgroundColor = '#43a047')
                    }
                  >
                    ➕ Add
                  </button>
                  <button
                    onClick={() => removeFromCart(item)}
                    style={{
                      backgroundColor: '#e53935',
                      color: 'white',
                      fontWeight: 'bold',
                      padding: '8px 14px',
                      border: 'none',
                      borderRadius: '6px',
                      cursor: 'pointer',
                    }}
                    onMouseOver={(e) =>
                      (e.target.style.backgroundColor = '#b71c1c')
                    }
                    onMouseOut={(e) =>
                      (e.target.style.backgroundColor = '#e53935')
                    }
                  >
                    ➖ Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          <h4
            style={{
              textAlign: 'right',
              fontSize: '22px',
              backgroundColor: '#fff',
              color: '#0072ff',
              padding: '12px 20px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              width: 'fit-content',
              float: 'right',
              fontWeight: 'bold',
            }}
          >
            🧾 Total: ₹{totalPrice}
          </h4>

          <div
            style={{
              marginTop: '70px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <div>
              <button
                onClick={() => {
                  alert('✅ Payment Successful!');
                  clearCart();
                }}
                style={{
                  backgroundColor: '#1565c0',
                  color: 'white',
                  fontWeight: 'bold',
                  padding: '14px 28px',
                  border: 'none',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  marginRight: '15px',
                  fontSize: '16px',
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = '#0d47a1')
                }
                onMouseOut={(e) =>
                  (e.target.style.backgroundColor = '#1565c0')
                }
              >
                💳 Pay Now
              </button>

              <button
                onClick={clearCart}
                style={{
                  backgroundColor: '#fff',
                  color: '#d32f2f',
                  fontWeight: 'bold',
                  padding: '14px 28px',
                  border: '2px solid #d32f2f',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  fontSize: '16px',
                }}
              >
                🗑️ Clear Cart
              </button>
            </div>

            <Link
              to="/home"
              style={{
                marginTop: '15px',
                backgroundColor: '#00c853',
                color: 'white',
                padding: '14px 28px',
                borderRadius: '10px',
                fontWeight: 'bold',
                textDecoration: 'none',
                fontSize: '16px',
              }}
              onMouseOver={(e) =>
                (e.target.style.backgroundColor = '#009624')
              }
              onMouseOut={(e) =>
                (e.target.style.backgroundColor = '#00c853')
              }
            >
              🛒 Continue Shopping
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Addcart;
