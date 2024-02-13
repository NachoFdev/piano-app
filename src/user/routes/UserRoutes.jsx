import { Navigate, Route, Routes } from 'react-router-dom';
import { LearningView } from '../views/LearningView';
import { PieceRoutes } from '../../pieces/routes/PieceRoutes';


export const UserRoutes = () => {
  return (
    <Routes>
      <Route path="learning" element={ <LearningView /> }/>
      <Route path="learning/*" element={ <PieceRoutes /> }/>
      <Route path="/*" element={ <Navigate to="/user/learning" /> } />
    </Routes>
  );
};
