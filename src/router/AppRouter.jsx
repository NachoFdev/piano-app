import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../home/pages';
import { AuthPage } from '../auth/pages';
import { UserLayout } from '../user/layout';
import { LearningView } from '../user/views/LearningView';


export const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<HomePage />}/>
      <Route path="/home" element={<HomePage />}/>
      <Route path="/auth" element={<AuthPage />}/>
      <Route path="/user" element={<LearningView />}/>
    </Routes>
  );
};
