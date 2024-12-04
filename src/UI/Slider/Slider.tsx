import styles from './Slider.module.scss';
import SkillsBox from '../../components/SkillsBox/SkillsBox';
import { useEffect, useState } from 'react';
import {logos} from '../../services/logos'

export default function Slider() {

    const sliderData = [...logos,...logos,...logos,...logos]

    const [currentPosition, setCurrentPosition] = useState(0);
    const itemWidth = 110; 
    const totalItems = sliderData.length;

    const sliderWidth = (itemWidth + 14)* totalItems; 


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPosition((prev) => {
                if (Math.abs(prev) >= sliderWidth) {
                    return 0;
                }
                return prev - itemWidth / 2; 
            });
        }, 2000);

        return () => clearInterval(interval);
    }, [sliderWidth]);

    return (
   
        <div className={styles.wrap } >
            <div
                className={styles.container}
                style={{
                    transform: `translateX(${currentPosition}px)`,
                    transition: `transform 2s linear`,
                }}
            >
                {sliderData.map((element, index) => (
                    <SkillsBox
                        key={index}
                        name={element.name}
                        background={element.background}
                        img={element.logo}
                        color={element.color}                
                     />
                ))}
            </div>
        </div>
    );
}
