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
      <div className="text-center mt-5 text-secondary fs-4">Loading...</div>
    );
  }

  if (!page) {
    return (
      <div className="text-center mt-5 text-danger fs-4">
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
      className="container py-5"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom right, #1e3c72, #2a5298)',
        color: '#f0f0f0',
      }}
    >
      <div className="row g-4 bg-dark bg-opacity-50 p-4 rounded shadow-lg align-items-center">
        {/* Image Section */}
        <div className="col-md-6">
          <img
            src={page.image}
            alt={page.name}
            className="img-fluid rounded shadow-sm w-100"
            style={{ maxHeight: '500px', objectFit: 'cover' }}
          />
        </div>

        {/* Details Section */}
        <div className="col-md-6">
          <h2 className="text-warning mb-3 text-center text-md-start">
            {page.name}
          </h2>
          <p className="fs-5 mb-2 text-center text-md-start">
            <strong>🎟 Price:</strong> ₹{page.ticketprice}
          </p>
          <p className="fs-5 mb-2 text-center text-md-start">
            <strong>📆 Release Date:</strong> {page.releasedate}
          </p>
          <p className="fs-6 mb-4 text-center text-md-start">
            <strong>📝 Description:</strong> {page.description}
          </p>

          {/* Buttons */}
          <div className="d-flex flex-column flex-sm-row gap-3 w-100">
            <button
              className="btn btn-success fw-bold w-100"
              onClick={handleAddToCart}
            >
              🛒 Add to Cart
            </button>
            <button
              className="btn btn-danger fw-bold w-100"
              onClick={() => navigate('/home')}
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
