import { useState, createContext, useEffect } from 'react';
import axios from 'axios';

// Create Asmaul Context
export const AsmaulContext = createContext();

// Create the Asmaul Context Provider
export const AsmaulProvider = (props) => {
  const [asmaulHusna, setAsmaulHusna] = useState([]);
  const [searchAsmaul, setSearchAsmaul] = useState('');

  useEffect(() => {
    // Fetch Asmaul Husna data from the API
    const fetchAsmaulHusna = async () => {
      try {
        const response = await axios.get('https://apimuslimify.vercel.app/api/v2/asmaulhusna');
        setAsmaulHusna(response.data.data);
      } catch (error) {
        console.error('Error fetching Asmaul Husna data:', error);
      }
    };

    fetchAsmaulHusna();
  }, []);

  // Search Asmaul Husna by name
  const searchAsmaulByTitle = asmaulHusna.filter((item) => {
    const result = (
        item.latin &&
        item.latin.toLowerCase().includes(searchAsmaul.toLowerCase())
      ) ? item : searchAsmaul === '' ? item : '';
      return result;
  });

  return (
    <AsmaulContext.Provider
      value={{
        asmaulHusna,
        setAsmaulHusna,
        searchAsmaul,
        setSearchAsmaul,
        searchAsmaulByTitle,
      }}
    >
      {props.children}
    </AsmaulContext.Provider>
  );
};
