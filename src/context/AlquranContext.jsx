import { useState, createContext, useEffect } from "react";
import axios from "axios";

import { motion } from "framer-motion";

// Create Asmaul Context
export const AlquranContext = createContext();

// Create the Asmaul Context Provider
export const AlquranProvider = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [alquran, setAlquran] = useState([]);
  const [searchAlquran, setSearchAlquran] = useState("");

  useEffect(() => {
    const fetchAlquran = async () => {
      try {
        const response = await axios.get(
          "https://apimuslimify.vercel.app/api/v2/surah"
        );
        setAlquran(response.data.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching Al Quran data:", error);
        setIsLoading(false);
      }
    };

    fetchAlquran();
  }, []);

  const searchAlquranByTitle = alquran.filter((item) => {
    const result =
      item.latin &&
      item.latin.toLowerCase().includes(searchAlquran.toLowerCase())
        ? item
        : searchAlquran === ""
        ? item
        : "";
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
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <motion.div
            className="w-10 h-10 border-4 border-t-[#3498db] rounded-full animate-spin"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          ></motion.div>
        </div>
      ) : (
        props.children
      )}
    </AlquranContext.Provider>
  );
};
