/* eslint-disable @next/next/no-img-element */
import { countriesData } from "@/lib/constant";
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Countries = () => {
   
    const { i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState('');
    
    const handleCountryClick = (language) => {
        setSelectedLanguage(language);
        localStorage.setItem('language', language);
        i18n.changeLanguage(language);
        console.log(language)
      };
  
  return (
    <section className="">
      <div className="flex md:flex-row flex-col md:ml-0 ml-3 md:items-center w-full overflow-hidden">
        <div className="grid grid-cols-2 md:mt-0 mt-5 space-y-2 md:grid-cols-2 lg:grid-cols-3 flex-1 lg:gap-2 gap-2 lg:space-y-1 3xl:gap-2 3xl:space-y-4">
          {countriesData.map((country) => (
            <div
              key={country.id}
              className="flex items-center space-x-3 hover:scale-105 transition duration-150 cursor-pointer group"
             
              onClick={() => handleCountryClick(country.value)}
            >
              <div className="w-[35px] lg:w-[45px] 3xl:w-[80px] relative">
                <img
                  src={country.country_flag}
                  alt={country.country_name}
                  className="object-fill"
                />
              </div>
              <div className="3xl:space-y-1">
                <p  value={country.value} className="text-[10px] uppercase tracking-[1.5px] group-hover:text-golden">
                  {country.country_name}
                </p>
                <p className="text-[10px] uppercase tracking-[1.5px] group-hover:text-golden">
                  {country.country_language}
                </p>
                <p className="text-[10px] uppercase tracking-[1.5px] group-hover:text-golden">
                  {country.country_language_optional}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Countries;
