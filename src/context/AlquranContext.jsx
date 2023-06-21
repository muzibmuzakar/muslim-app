import { useState, createContext, useEffect } from 'react';
import axios from 'axios';

// Create Asmaul Context
export const AlquranContext = createContext();

// Create the Asmaul Context Provider
export const AlquranProvider = (props) => {
  const [alquran, setAlquran] = useState([]);
  const [searchAlquran, setSearchAlquran] = useState('');

  useEffect(() => {
    // Fetch Asmaul Husna data from the API
    const fetchAlquran = async () => {
      try {
        const response = await axios.get('https://apimuslimify.vercel.app/api/v2/surah');
        setAlquran(response.data.data);
      } catch (error) {
        console.error('Error fetching Al Quran data:', error);
      }
    };

    fetchAlquran();
  }, []);

  const searchAlquranByTitle = alquran.filter((item) => {
    const result = (
        item.latin &&
        item.latin.toLowerCase().includes(searchAlquran.toLowerCase())
      ) ? item : searchAlquran === '' ? item : '';
      return result;
  });

  return (
    <AlquranContext.Provider
      value={{
        alquran,
        setAlquran,
        searchAlquran,
        setSearchAlquran,
        searchAlquranByTitle,
      }}
    >
      {props.children}
    </AlquranContext.Provider>
  );
};
