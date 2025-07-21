import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../../Components/CartContext/CartContext';

const Detail = () => {
  const { id } = useParams();
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://backend-crud-one.vercel.app/product/${id}`)
      .then((res) => {
        setPage(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Fetch error:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px', fontSize: '20px', color: '#555' }}>
        Loading...
      </div>
    );
  }

  if (!page) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px', fontSize: '20px', color: 'crimson' }}>
        Product not found.
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: page.id,
      name: page.name,
      price: page.ticketprice,
      image: page.image,
    });
    navigate('/cart');
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        padding: '40px',
        background: 'linear-gradient(to bottom right, #1e3c72, #2a5298)',
        fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
        color: '#f0f0f0',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '40px',
          background: 'rgba(0, 0, 0, 0.4)',
          padding: '30px',
          borderRadius: '16px',
          boxShadow: '0 8px 25px rgba(0,0,0,0.4)',
          maxWidth: '1000px',
          margin: 'auto',
        }}
      >
        <div style={{ flex: 1 }}>
          <img
            src={page.image}
            alt={page.name}
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
            }}
          />
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2 style={{ fontSize: '30px', marginBottom: '10px', color: '#ffd700' }}>{page.name}</h2>
          <p style={{ fontSize: '18px', marginBottom: '8px' }}>
            <strong>🎟 Price:</strong> ₹{page.ticketprice}
          </p>
          <p style={{ fontSize: '18px', marginBottom: '8px' }}>
            <strong>📆 Release Date:</strong> {page.releasedate}
          </p>
          <p style={{ fontSize: '17px', marginBottom: '20px', lineHeight: '1.6' }}>
            <strong>📝 Description:</strong> {page.description}
          </p>
          <div style={{ display: 'flex', gap: '15px' }}>
            <button
              onClick={handleAddToCart}
              style={{
                backgroundColor: '#28a745',
                padding: '12px 25px',
                fontSize: '16px',
                border: 'none',
                borderRadius: '8px',
                color: 'white',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: '0.3s',
              }}
            >
              🛒 Add to Cart
            </button>
            <button
              onClick={() => navigate('/home')}
              style={{
                backgroundColor: '#dc3545',
                padding: '12px 25px',
                fontSize: '16px',
                border: 'none',
                borderRadius: '8px',
                color: 'white',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: '0.3s',
              }}
            >
              🔙 Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
