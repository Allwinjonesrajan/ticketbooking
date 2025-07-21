import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

const { Meta } = Card;

const CustomCard = ({ item }) => {
  return (
      <Card 
        hoverable
        style={{ width: '100%',marginTop:"30px"}}
        cover={
          <img
            alt={item.name}
            src={item.image}
            style={{ width: '100%', height: '300px', objectFit: 'cover' }}
          />
        }
      >
        <Meta title={item.name}/>
        <p><strong>Release Date:</strong> {item.releasedate}</p>
        <p><strong>Director:</strong> {item.director}</p>
        <p><strong>Budget:</strong> {item.budget}</p>
        <p><strong>Ticket Price:</strong> ₹{item.ticketprice}</p>
        <Link to={`/${item._id}`}>

        

          <button type="button" className="btn btn-primary btn-sm mt-2">
            View Details
          </button>
        </Link>
      </Card>
  );
};

export default CustomCard;
