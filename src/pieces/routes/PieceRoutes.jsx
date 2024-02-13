import { Navigate, Route, Routes } from 'react-router-dom';
import { PieceView } from '../views/PieceView';


export const PieceRoutes = () => {
  return (
    <Routes>
      <Route path="piece/:id" element={ <PieceView /> }/>
      <Route path="/*" element={ <Navigate to="/user/learning" /> } />
    </Routes>
  );
};
