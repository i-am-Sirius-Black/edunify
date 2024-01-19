// pages/showSchools.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ShowSchools() {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('/api/showSchools');
      setSchools(res.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Show Schools</h1>
      <div>
        {schools.map((school) => (
          <div key={school.name}>
            <img src={school.image} alt={school.name} />
            <h3>{school.name}</h3>
            <p>{school.address}</p>
            <p>{school.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

