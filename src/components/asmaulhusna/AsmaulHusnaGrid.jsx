import { useContext } from 'react';
import { FiSearch } from 'react-icons/fi';
import AsmaulHusnaSingle from './AsmaulHusnaSingle';
import { AsmaulContext } from '../../context/AsmaulContext';

const AsmaulHusnaGrid = () => {
  const {
    asmaulHusna,
    searchAsmaul,
    setSearchAsmaul,
    searchAsmaulByTitle,
  } = useContext(AsmaulContext);

  return (
    <section className="py-5">

      <div className="mt-5">
        <div className="flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-3">
          <div className="flex justify-between gap-2">
            <span className="bg-primary-light dark:bg-slate-800 p-2.5 shadow-sm rounded-xl cursor-pointer">
              <FiSearch className="text-ternary-dark dark:text-ternary-light w-5 h-5" />
            </span>
            <input
              onChange={(e) => {
                setSearchAsmaul(e.target.value);
              }}
              className="font-general-medium pl-3 pr-1 sm:px-4 py-2 border border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-slate-800 text-primary-dark dark:text-ternary-light"
              id="name"
              name="name"
              type="search"
              required=""
              placeholder="Search Asmaul Husna"
              aria-label="Name"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
        {searchAsmaul
          ? searchAsmaulByTitle.map((asmaul) => (
              <AsmaulHusnaSingle
                name={asmaul.arabic}
                translation={asmaul.latin}
                key={asmaul.number}
              />
            ))
          : asmaulHusna.map((asmaul) => (
              <AsmaulHusnaSingle
                name={asmaul.arabic}
                translation={asmaul.latin}
                key={asmaul.number}
              />
            ))}
      </div>
    </section>
  );
};

export default AsmaulHusnaGrid;
