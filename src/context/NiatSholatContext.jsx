import { useState, createContext, useEffect } from 'react';
import axios from 'axios';

// Create Asmaul Context
export const NiatSholatContext = createContext();

// Create the Asmaul Context Provider
export const NiatSholatProvider = (props) => {
  const [niatSholat, setNiatSholat] = useState([]);
  const [searchNiatSholat, setSearchNiatSholat] = useState('');

  useEffect(() => {
    // Fetch Asmaul Husna data from the API
    const fetchNiatSholat = async () => {
      try {
        const response = await axios.get('https://apimuslimify.vercel.app/api/v2/niatshalat');
        setNiatSholat(response.data.data);
      } catch (error) {
        console.error('Error fetching Niat Sholat data:', error);
      }
    };

    fetchNiatSholat();
  }, []);

  // Search Asmaul Husna by name
  const searchNiatSholatByTitle = niatSholat.filter((item) => {
    const result = (
        item.name &&
        item.name.toLowerCase().includes(searchNiatSholat.toLowerCase())
      ) ? item : searchNiatSholat === '' ? item : '';
      return result;
  });

  return (
    <NiatSholatContext.Provider
      value={{
        niatSholat,
        setNiatSholat,
        searchNiatSholat,
        setSearchNiatSholat,
        searchNiatSholatByTitle,
      }}
    >
      {props.children}
    </NiatSholatContext.Provider>
  );
};
