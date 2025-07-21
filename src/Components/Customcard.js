import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

const { Meta } = Card;

const CustomCard = ({ item }) => {
  const [hovered, setHovered] = React.useState(false);
  const [btnHovered, setBtnHovered] = React.useState(false);

  const cardWrapperStyle = {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '20px',
    borderRadius: '20px',
    boxShadow: '0 15px 30px rgba(0,0,0,0.2)',
    transition: 'transform 0.3s ease',
    transform: hovered ? 'scale(1.03)' : 'scale(1)',
  };

  const cardStyle = {
    borderRadius: '16px',
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    border: '1px solid rgba(255,255,255,0.3)',
    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
    color: '#fff',
  };

  const imageStyle = {
    width: '100%',
    height: '280px',
    objectFit: 'cover',
    transition: 'transform 0.4s ease',
    borderBottom: '1px solid rgba(255,255,255,0.2)',
  };

  const titleStyle = {
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: '10px',
  };

  const textStyle = {
    fontSize: '15px',
    color: '#f1f1f1',
    marginBottom: '5px',
  };

  const btnStyle = {
    marginTop: '15px',
    padding: '10px 18px',
    fontSize: '14px',
    fontWeight: 'bold',
    backgroundColor: btnHovered ? '#ffffff' : '#4a00e0',
    color: btnHovered ? '#4a00e0' : '#ffffff',
    border: '2px solid #ffffff',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: '0.3s ease',
  };

  return (
    <div
      style={cardWrapperStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Card
        hoverable
        style={cardStyle}
        cover={
          <img
            alt={item.name}
            src={item.image}
            style={imageStyle}
          />
        }
      >
        <Meta title={<div style={titleStyle}>{item.name}</div>} description={null} />
        <p style={textStyle}><strong>Release Date:</strong> {item.releasedate}</p>
        <p style={textStyle}><strong>Director:</strong> {item.director}</p>
        <p style={textStyle}><strong>Budget:</strong> {item.budget}</p>
        <p style={textStyle}><strong>Ticket Price:</strong> ₹{item.ticketprice}</p>

        <Link to={`/${item._id}`}>
          <button
            type="button"
            style={btnStyle}
            onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
          >
            View Details
          </button>
        </Link>
      </Card>
    </div>
  );
};

export default CustomCard;
