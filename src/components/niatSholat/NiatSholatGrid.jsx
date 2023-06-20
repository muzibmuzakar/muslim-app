import { useContext } from 'react';
import { FiSearch } from 'react-icons/fi';
import { NiatSholatContext } from '../../context/NiatSholatContext';
import NiatSholatSingle from './NiatSholatSingle';

const NiatSholatGrid = () => {
  const {
    niatSholat,
    searchNiatSholat,
    setSearchNiatSholat,
    searchNiatSholatByTitle,
  } = useContext(NiatSholatContext);

  return (
    <section className="py-5">

      <div className="mt-2">
        <div className="flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-3">
          <div className="flex justify-between gap-2 w-full">
            <span className="bg-primary-light dark:bg-slate-800 p-2.5 shadow-sm rounded-xl cursor-pointer">
              <FiSearch className="text-ternary-dark dark:text-ternary-light w-5 h-5" />
            </span>
            <input
              onChange={(e) => {
                setSearchNiatSholat(e.target.value);
              }}
              className="w-full font-general-medium pl-3 pr-1 sm:px-4 py-2 border border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-primary-light dark:bg-slate-800 text-primary-dark dark:text-ternary-light"
              id="name"
              name="name"
              type="search"
              required=""
              placeholder="Search Niat Sholat"
              aria-label="Name"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
        {searchNiatSholat
          ? searchNiatSholatByTitle.map((niatSholat) => (
              <NiatSholatSingle
                name={niatSholat.name}
                arabic={niatSholat.arabic}
                translation={niatSholat.translation}
                key={niatSholat.number}
              />
            ))
          : niatSholat.map((niatSholat) => (
              <NiatSholatSingle
                name={niatSholat.name}
                arabic={niatSholat.arabic}
                translation={niatSholat.translation}
                key={niatSholat.number}
              />
            ))}
      </div>
    </section>
  );
};

export default NiatSholatGrid;
