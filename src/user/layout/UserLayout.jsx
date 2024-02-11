import { NavBar } from "../components";


export const UserLayout = ({ children }) => {
  return (
    <>

    <NavBar />

      { children }
    
    </>
  );
};
