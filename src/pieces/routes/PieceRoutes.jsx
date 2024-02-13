import { UdView } from '../views/UdView';


export const PieceRoutes = () => {
  return (
    <Routes>
      <Route path="piece" element={ <UdView /> }/>
      <Route path="/*" element={ <Navigate to="/user/piece" /> } />
    </Routes>
  );
};
