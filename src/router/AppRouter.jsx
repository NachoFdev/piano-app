import { Navigate, Route, Routes } from 'react-router-dom';
import { useCheckAuth } from '../hooks';
import { LoadPage } from '../global/components';
import { UserRoutes } from '../user/routes/UserRoutes';
import { HomeRoutes } from '../home/routes/HomeRoutes';


export const AppRouter = () => {

  const status = useCheckAuth();

  if ( status === 'checking' ) {
    return <LoadPage />
  }

  return (

    <Routes>

      {
        ( status === 'authenticated' )
        ? <Route path="/user/*" element={ <UserRoutes /> }/>
        : <Route path="/*" element={ <HomeRoutes /> }/>
      }
      <Route path="/*" element={ <Navigate to="/user/learning" /> } />


      {/* <Route path="/*" element={ <Navigate to="/home" /> } /> */}
      {/* <Route index element={<HomePage />}/> */}
      {/* <Route path="/" element={<HomePage />}/>
      <Route path="/auth/*" element={<AuthRoutes />}/>
      <Route path="/user/*" element={<UserRoutes />}/> */}
    </Routes>
  );
};
