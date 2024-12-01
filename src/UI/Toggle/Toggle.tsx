import { useEffect, useState } from 'react';
import SunSVG from '../../svg/SunSVG/SunSVG';
import MoonSVG from '../../svg/MoonSVG/MoonSVG';

export default function Toggle() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
      };

      useEffect(() => {
        if (darkMode) {
          document.body.classList.add('dark');
        } else {
          document.body.classList.remove('dark');
        }
      }, [darkMode]);
   

    return (
        <label className="relative inline-block w-12 h-6">
            <input
                type="checkbox"
                checked={darkMode}
                onChange={toggleDarkMode}
                className="peer opacity-0 w-0 h-0"
            />
            <span
                className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-200 transition rounded-full 
                           peer-checked:bg-gray-500"
            ></span>
            <span
                className="absolute top-[2px] cursor-pointer left-[2px] h-5 w-5 bg-white rounded-full border border-gray-200 transition 
                           peer-checked:translate-x-6 peer-checked:border-gray-500 flex justify-center items-center" 
            >
                {!darkMode ?<SunSVG fill={'#d7d3d2'} /> : <MoonSVG /> }
            </span>
        </label>
    );
}
