import React, { useState, useEffect } from 'react';
import BeerCard from './components/BeerCard';

function App() {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.punkapi.com/v2/beers');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBeers(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const filteredBeers = beers.filter((beer) =>
    beer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="my-4 text-center">PunkApi Assesment</h1>
      <input
        type="text"
        placeholder="Search beers..."
        className="form-control mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="row">
           {filteredBeers.map((beer) => (
            <BeerCard key={beer.id} beer={beer} />
        ))}
      </div>
    </div>
  );
}

export default App;
