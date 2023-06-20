import { useState, createContext, useEffect } from 'react';
import axios from 'axios';

// Create Asmaul Context
export const DoaContext = createContext();

// Create the Asmaul Context Provider
export const DoaProvider = (props) => {
  const [doa, setDoa] = useState([]);
  const [searchDoa, setSearchDoa] = useState('');

  useEffect(() => {
    // Fetch Asmaul Husna data from the API
    const fetchDoa = async () => {
      try {
        const response = await axios.get('https://apimuslimify.vercel.app/api/v2/doaharian');
        setDoa(response.data.data);
      } catch (error) {
        console.error('Error fetching Doa harian data:', error);
      }
    };

    fetchDoa();
  }, []);

  // Search Asmaul Husna by name
  const searchDoaByTitle = doa.filter((item) => {
    const result = (
        item.name &&
        item.name.toLowerCase().includes(searchDoa.toLowerCase())
      ) ? item : searchDoa === '' ? item : '';
      return result;
  });

  return (
    <DoaContext.Provider
      value={{
        doa,
        setDoa,
        searchDoa,
        setSearchDoa,
        searchDoaByTitle,
      }}
    >
      {props.children}
    </DoaContext.Provider>
  );
};
