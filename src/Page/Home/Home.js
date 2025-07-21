import React, { useEffect, useState } from 'react';
import Customcard from '../../Components/Customcard';

const Home = () => {
  const [output, setOutput] = useState([]);

  useEffect(() => {
    fetch("https://backend-crud-one.vercel.app/product")
      .then(response => response.json())
      .then(data => setOutput(data))
      .catch(error => console.error('Fetch error:', error));
  }, []);

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          {output.map((item, index) => (
            <div className="col-lg-4 mb-4" key={item._id || index}>
              <Customcard item={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
