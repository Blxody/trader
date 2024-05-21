<script src="http://localhost:8097"></script>
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/stocks/')
      .then(response => {
        setStocks(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the stocks!", error);
      });
  }, []);

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
