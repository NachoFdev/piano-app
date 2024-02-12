import { Navigate, Route, Routes } from 'react-router-dom';
import { LearningView } from '../views/LearningView';


export const UserRoutes = () => {
  return (
    <Routes>
      <Route path="learning" element={ <LearningView /> }/>
      <Route path="/*" element={ <Navigate to="/user/learning" /> } />
    </Routes>
  );
};
