import { Navigate, Route, Routes } from 'react-router-dom';
import { PieceLayout } from '../layout/PieceLayout';


export const PieceRoutes = () => {
  return (
    <Routes>
      <Route path="piece/:id" element={ <PieceLayout /> }/>
      <Route path="/*" element={ <Navigate to="/user/learning" /> } />
    </Routes>
  );
};
