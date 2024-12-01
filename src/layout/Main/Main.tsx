import { Route, Routes } from 'react-router-dom';
import Error from '../../pages/Error/Error';
import styles from './Main.module.scss';
import Home from '../../pages/Home/Home';

export default function Main() {
    return (
        <main>
            <div className={styles['wrap-main']}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </div>
        </main>
    );
}