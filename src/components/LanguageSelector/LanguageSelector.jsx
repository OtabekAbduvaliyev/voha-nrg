import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (event) => {
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage);
    };

    const languages = [
        { code: 'ru', lang: 'Ru' },
        { code: 'uz', lang: 'Uz' }
    ];

    return (
        <select 
        id="options"             
        onChange={changeLanguage}
        value={i18n.language} 
        className="navButtonSelect bg-transparent focus:outline-none font-montserrat font-[500] p-2 text-[18px]">
            {languages.map((lng)=>(
            <option 
            key={lng.code} 
             value={lng.code} 
             className={`${lng.code === i18n.language ? 'text-black' : ''} text-black cursor-pointer`}>{lng.lang}</option>
            ))}
        </select>
    );
};

export default LanguageSelector;
