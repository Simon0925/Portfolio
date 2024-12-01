import { Route, Routes } from 'react-router-dom';
import Error from '../../pages/Error/Error';
import styles from './Main.module.scss';
import Home from '../../pages/Home/Home';

export default function Main() {
    return (
        <main className="container w-full h-dvh bg-white dark:bg-gray-900 mx-auto px-4 max-w-3xl pt-28">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </main>
    );
}