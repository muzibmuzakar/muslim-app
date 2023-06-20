const AppFooter = () => {
  return (
    <div className="container mx-auto">
      <div className="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
        <div className="font-general-regular flex justify-center items-center text-center">
          <div className="text-lg text-ternary-dark dark:text-ternary-light">
            &copy; {new Date().getFullYear()}
            <a
              href="https://github.com/realstoman/react-tailwindcss-portfolio"
              target="__blank"
              className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
            >
              Muzib Muzakar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppFooter;
