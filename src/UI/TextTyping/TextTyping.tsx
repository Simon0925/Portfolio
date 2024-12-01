import { useEffect, useState } from 'react';
import styles from './TextTyping.module.scss';

export default function TextTyping() {

    const texts = ["Hello, I'm Sam Yakovenko", "Welcome to my Portfolio!"];

    const [currentText, setCurrentText] = useState('');
  

    const [isDeleting, setIsDeleting] = useState(false);
    const [textIndex, setTextIndex] = useState(0); 
    const [typingSpeed, setTypingSpeed] = useState(200); 

    useEffect(() => {
        const handleTyping = () => {

            const fullText = texts[textIndex]; 

            if (isDeleting) {
                setCurrentText((prev) => prev.slice(0, -1));
                setTypingSpeed(100); 
            } else {
                setCurrentText((prev) => fullText.slice(0, prev.length + 1));
                setTypingSpeed(200); 
            }
            if (!isDeleting && currentText === fullText) {
                setTimeout(() => setIsDeleting(true), 1000); 
            } else if (isDeleting && currentText === '') {
                setIsDeleting(false);
                setTextIndex((prev) => (prev + 1) % texts.length); 
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(timer); 
    }, [currentText, isDeleting, textIndex, texts, typingSpeed]);



    

    return (
        <>
            <h1 className={styles.title}>
                {currentText}
            </h1>
        </>
    );
}
