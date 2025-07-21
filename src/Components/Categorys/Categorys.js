import React from 'react';

const Categorys = () => {
  const categories = [
    {
      title: 'Hollywood',
      image: 'https://wallpapercave.com/wp/wp9164084.jpg',
    },
    {
      title: 'Tamil Cinemas',
      image: 'https://wallpapercave.com/wp/wp4618183.jpg',
    },
    {
      title: 'Malayalam Movies',
      image: 'https://th.bing.com/th/id/OIP.mV1aihECAjQAXBvw37lHgQHaML?rs=1&pid=ImgDetMain',
    },
  ];

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  };

  const titleStyle = {
    fontSize: '36px',
    color: '#4a00e0',
    marginBottom: '10px',
  };

  const subtitleStyle = {
    fontSize: '20px',
    color: '#555',
    marginBottom: '30px',
  };

  const gridStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
  };

  const cardStyle = {
    backgroundColor: '#e6f0ff',
    borderRadius: '10px',
    padding: '15px',
    width: '250px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease',
  };

  const imageStyle = {
    width: '100%',
    height: '150px',
    borderRadius: '8px',
    objectFit: 'cover',
  };

  const headingStyle = {
    fontSize: '18px',
    color: '#333',
    marginBottom: '10px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Categories</h1>
      <h3 style={subtitleStyle}>Available Movie Categories</h3>

      <div style={gridStyle}>
        {categories.map((cat, index) => (
          <div key={index} style={cardStyle}>
            <h5 style={headingStyle}>{index + 1}. {cat.title}</h5>
            <img alt={cat.title} src={cat.image} style={imageStyle} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categorys;
