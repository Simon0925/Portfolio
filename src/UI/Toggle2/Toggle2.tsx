import {useEffect, useState } from 'react';

import styles from './Toggle2.module.scss'

export default function Toggle2() {
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
       <div className={styles.wrapper} >
            <input
                type="checkbox"
                name='checkbox'
                checked={darkMode}
                onChange={toggleDarkMode}
                className={`${styles.switch}`}
            />
       </div>
    );
}
