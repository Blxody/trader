import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/api/stocks/')
      .then(response => {
        setStocks(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("There was an error fetching the stocks!", error);
        setError("Failed to fetch stocks. Please try again later.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {stocks.map(stock => (
          <li key={stock.id}>{stock.name} - ${stock.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
