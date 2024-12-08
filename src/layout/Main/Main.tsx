import { Route, Routes } from 'react-router-dom';
import Error from '../../pages/Error/Error';
import Home from '../../pages/Home/Home';
import AdminPanel from '../../pages/AdminPanel/AdminPanel';

export default function Main() {
    return (
        <main className="container w-full  bg-white dark:bg-gray-900 mx-auto px-4 max-w-3xl pt-28">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin-panel-sam" element={<AdminPanel />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </main>
    );
}