import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages';
import { AuthRoutes } from '../../auth/routes/AuthRoutes';


export const HomeRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={ <HomePage /> }/>
      <Route path="/auth/*" element={ <AuthRoutes /> }/>
      <Route path="/*" element={ <Navigate to="/piano-app" /> } />
    </Routes>
  );
};
