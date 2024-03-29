import { Navigate, Outlet } from 'react-router-dom';


export const ProtectedRoute = ({ user, redirectTo = "/" }) => {
    if ( user ==! 'authenticated' ) return <Navigate to={ redirectTo } />;
    return <Outlet />;
};