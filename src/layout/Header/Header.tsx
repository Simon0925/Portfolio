import TextTyping from '../../UI/TextTyping/TextTyping';
import Toggle from '../../UI/Toggle/Toggle';
import styles from './Header.module.scss';
import Toggle2 from '../../UI/Toggle2/Toggle2';




export default function Header() {

    

    return (
        <header className={`  dark:bg-gray-900 ${styles.wrap}`}>
            <TextTyping />
            <div className=' inline-block sm:hidden '>
                <Toggle />
            </div>
             <div className=' hidden sm:inline-block '>
                 <Toggle2 />
             </div>
        </header>
    );
}