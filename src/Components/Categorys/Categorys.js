import React from 'react';
import { useNavigate } from 'react-router-dom';

const Categorys = () => {
  const navigate = useNavigate();

  const categories = [
    {
      title: '🎬 Hollywood',
      image: 'https://wallpapercave.com/wp/wp9164084.jpg',
      description: 'Explore the latest and greatest blockbusters from Hollywood!',
    },
    {
      title: '🎥 Tamil Cinemas',
      image: 'https://wallpapercave.com/wp/wp4618183.jpg',
      description: 'Dive into Kollywood with action, emotion, and drama.',
    },
    {
      title: '🎭 Malayalam Movies',
      image: 'https://th.bing.com/th/id/OIP.mV1aihECAjQAXBvw37lHgQHaML?rs=1&pid=ImgDetMain',
      description: 'Experience award-winning Malayalam storytelling and realism.',
    },
    {
      title: '🎞️ Bollywood',
      image: 'https://wallpapercave.com/wp/wp8807417.jpg',
      description: 'Catch the vibrant and emotional pulse of Bollywood cinema.',
    },
  ];

  const handleBackToHome = () => {
    navigate('/home');
  };

  return (
    <div className="category-container">
      <h1 className="page-title">📽️ Movie Categories</h1>
      <h3 className="page-subtitle">Choose your favorite cinema world</h3>

      <div className="category-grid">
        {categories.map((cat, index) => (
          <div key={index} className="category-card">
            <img alt={cat.title} src={cat.image} className="category-img" />
            <h4 className="category-title">{cat.title}</h4>
            <p className="category-desc">{cat.description}</p>
          </div>
        ))}
      </div>

      <button className="back-button" onClick={handleBackToHome}>
        ⬅️ Back to Home
      </button>

      {/* Embedded CSS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

        .category-container {
          font-family: 'Poppins', sans-serif;
          max-width: 1300px;
          margin: 0 auto;
          padding: 40px 20px;
          text-align: center;
          background: linear-gradient(135deg, #fefcea, #f1daff);
          min-height: 100vh;
        }

        .page-title {
          font-size: 40px;
          color: #5d00ff;
          margin-bottom: 10px;
          font-weight: 700;
        }

        .page-subtitle {
          font-size: 20px;
          color: #333;
          margin-bottom: 35px;
        }

        .category-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 28px;
        }

        .category-card {
          background: #ffffff;
          border-radius: 16px;
          padding: 20px;
          width: 270px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .category-card:hover {
          transform: translateY(-12px) scale(1.03);
          box-shadow: 0 16px 25px rgba(0, 0, 0, 0.2);
          background-color: #f2f3f7;
        }

        .category-img {
          width: 100%;
          height: 180px;
          border-radius: 12px;
          object-fit: cover;
          border: 3px solid #5d00ff44;
          margin-bottom: 15px;
          transition: transform 0.3s;
        }

        .category-img:hover {
          transform: scale(1.05);
        }

        .category-title {
          font-size: 20px;
          color: #222;
          margin-bottom: 8px;
          font-weight: 600;
        }

        .category-desc {
          color: #555;
          font-size: 14px;
        }

        .back-button {
          margin-top: 45px;
          padding: 12px 30px;
          font-size: 16px;
          background: #5d00ff;
          color: white;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          font-weight: 600;
          box-shadow: 0 6px 14px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
        }

        .back-button:hover {
          background: #3e00b3;
        }

        @media (max-width: 768px) {
          .category-card {
            width: 100%;
          }

          .page-title {
            font-size: 30px;
          }

          .page-subtitle {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default Categorys;
