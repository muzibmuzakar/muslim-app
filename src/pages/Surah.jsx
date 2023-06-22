import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

const Surah = () => {
  const { number } = useParams();
  const [surah, setSurah] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch Surah data from the API
    const fetchSurah = async () => {
      try {
        const response = await axios.get(
          `https://apimuslimify.vercel.app/api/v2/surah?number=${number}`
        );
        setSurah(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Surah data:", error);
        setLoading(false);
      }
    };

    fetchSurah();
  }, [number]);

  return (
    <div className="container mx-auto">
      {loading ? (
        // Tampilkan animasi loading jika data masih dalam proses fetching
        <div className="flex items-center justify-center h-screen">
          <motion.div
            className="w-10 h-10 border-4 border-t-[#34b3f1] rounded-full animate-spin"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          ></motion.div>
        </div>
      ) : (
        // Tampilkan konten Surah setelah data selesai di-fetch
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, delay: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 0.7,
              delay: 0.15,
            }}
          >
            <div className="rounded-md border border-slate-700 dark:wwhite px-4 mb-10 sm:mb-0">
              <div className="flex flex-row justify-between items-center">
                <div className="w-10 h-10 rounded-md bg-surah bg-cover bg-center flex items-center justify-center">
                  <p className=" dark:text-white">1</p>
                </div>
                <div className="text-center px-4 py-6">
                  <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
                    {surah.data && surah.data.latin}
                  </p>
                  <span className="text-md text-slate-500">
                    {surah.data && surah.data.translation}
                  </span>
                </div>
                <div className="text-center px-4 py-6">
                  <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
                    {surah.data && surah.data.arabic}
                  </p>
                  <span className="text-md text-slate-500">
                    {surah.data && surah.data.total_ayat} ayat
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {surah.data &&
            surah.data.ayat.map((surah) => (
              <motion.div
                key={surah.ayat_number}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, delay: 1 }}
                transition={{
                  ease: "easeInOut",
                  duration: 0.7,
                  delay: 0.15,
                }}
              >
                <div className="flex flex-col p-4 border-b border-slate-500">
                  <div className="flex flex-row justify-between items-center">
                    <div className="w-10 h-10 rounded-md bg-surah bg-cover bg-center flex items-center justify-center">
                      <p className="dark:text-white">{surah.ayat_number}</p>
                    </div>
                    <div className="text-right px-4 py-6 max-w-[90%]">
                      <p className="font-general-medium text-3xl text-ternary-dark dark:text-ternary-light mb-2">
                        {surah.arabic}
                      </p>
                    </div>
                  </div>

                  <div className="">
                    <p className="font-general-medium text-md text-ternary-dark dark:text-ternary-light mb-2">
                      {surah.latin}
                    </p>
                    <span className="text-sm text-slate-500 italic">
                      "{surah.translation}"
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
        </>
      )}
    </div>
  );
};

export default Surah;
