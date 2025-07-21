import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../../Components/CartContext/CartContext';
import Navbar from '../../Components/Navbar/Navbar';

const Detail = () => {
  const { id } = useParams();
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://backend-crud-one.vercel.app/product/${id}`)
      .then((res) => {
        setPage(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Fetch error:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="text-center mt-5">Loading...</div>;
  if (!page) return <div className="text-center mt-5">Product not found.</div>;

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
    <>
    <Navbar/>
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6">
          <img src={page.image} alt={page.name} className="img-fluid rounded" />
        </div>
        <div className="col-lg-6 d-flex flex-column justify-content-center">
          <h2>{page.name}</h2>
          <p><strong>Price:</strong> ₹{page.ticketprice}</p>
          <p><strong>Release Date:</strong> {page.releasedate}</p>
          <p><strong>Description:</strong> {page.description}</p>
          <div style={{ display: "flex", gap: "10px" }}>
  <button 
    onClick={handleAddToCart}  
    className="btn btn-danger" 
    style={{ 
      color: "white", 
      backgroundColor: "green", 
      padding: "10px 22px", 
      border: "none", 
      borderRadius: "5px", 
      fontSize: "18px"
    }}
  >
    Add to Cart
  </button>

  <button 
    className="btn btn-danger" 
    onClick={() => navigate('/home')}
    style={{ 
      padding: "10px 25px", 
      fontSize: "18px" 
    }}
  >
    Back
  </button>
</div>

        </div>
      </div>
    </div>
    </>
  );
};

export default Detail;
