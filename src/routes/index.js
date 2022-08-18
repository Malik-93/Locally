import React from 'react';
import {
    Routes,
    Route,
    Navigate,
    Outlet,
    useNavigate
} from "react-router-dom";
import { useAppSelector } from '../hooks/store.hook';
import Dashboard from '../pages/Dashboard';
import Landing from '../pages/Landing';
import Login from '../pages/registration/Login';
import Signup from '../pages/registration/Signup';
const ProtectedRoute = ({ user, children }) => {
    if (!user) {
        return <Navigate to="/landing" replace />;
    }
    return <Outlet />;
};

const AppRoutes = () => {
    const navigate = useNavigate();
    const reducer = useAppSelector(store => store.user_slice);
    const currentUser = reducer.user_slice;
    console.log('[Routes].currentUser', currentUser);
    React.useEffect(() => {
        if (Object.keys(currentUser).length) {
            navigate('/app/dashboard')
        }
        else navigate('/user/login')
    }, [currentUser])
    return (
        <Routes>
            <Route index element={<Landing />} />
            <Route path="/user/Signup" element={<Signup />} />
            <Route path="/user/login" element={<Login />} />
            <Route element={<ProtectedRoute user={currentUser} />}>
                <Route path='/app/dashboard' element={<Dashboard />} />
            </Route>
        </Routes>
    )
}
export default AppRoutes;
