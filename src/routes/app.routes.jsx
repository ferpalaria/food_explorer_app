import { Routes, Route } from 'react-router-dom';

import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { Main } from '../pages/Main';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<SignIn/>}/>
            <Route path="/register" element={<SignUp/>}/>

            <Route path="/main" element={<Main/>}/>
        </Routes>
    )
}