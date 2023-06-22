import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const Surah = () => {
  const [surah, setSurah] = useState([]);

  useEffect(() => {
    // Fetch Asmaul Husna data from the API
    const fetchSurah = async () => {
      try {
        const response = await axios.get('https://apimuslimify.vercel.app/api/v2/surah?number=1');
        setSurah(response.data.data.ayat);
      } catch (error) {
        console.error('Error fetching Surah data:', error);
      }
    };

    fetchSurah();
  }, []);

  return (
    <div className="container mx-auto">
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
              Al-Fātiḥah
              </p>
              <span className="text-md text-slate-500">Pembuka</span>
            </div>
            <div className="text-center px-4 py-6">
              <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
              الفاتحة
              </p>
              <span className="text-md text-slate-500">7 ayat</span>
            </div>
          </div>
        </div>
      </motion.div>

      {surah.map((surah) => (
  <motion.div
    key={surah.ayat_number} // Tambahkan properti key untuk setiap elemen di dalam array
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

    </div>
  );
};

export default Surah;
