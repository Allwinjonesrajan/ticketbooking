import React, { useEffect, useState } from 'react';
import Customcard from '../../Components/Customcard';
import { useSearch } from '../../Components/Context/SearchContext'; // ✅ Correct path

const Home = () => {
  const [output, setOutput] = useState([]);
  const { searchQuery } = useSearch(); // ✅ Get search query

  useEffect(() => {
    fetch("https://backend-crud-one.vercel.app/product")
      .then(response => response.json())
      .then(data => setOutput(data))
      .catch(error => console.error('Fetch error:', error));
  }, []);

  // ✅ Filter items by search query
  const filteredItems = output.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <div className="row">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <div className="col-lg-4 mb-4" key={item._id || index}>
              <Customcard item={item} />
            </div>
          ))
        ) : (
          <p>No matching items found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
