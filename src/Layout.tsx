import { Outlet, Link} from "react-router-dom";
import Header from "./components/Header";
import useAuth from "./customHooks/useAuth";
import { ModalProvider } from "./context/ModalContext";

const Layout = () => {
  const { isLoggedIn } = useAuth();

  const UnAuthorized = () => {
    return (
        <div>
            <p>You're not authorized login to continue</p>
            <Link to={'/login'}>Login</Link>
        </div>
    )
  } 

  return (
    <>
      {
        // Showing the content only if the user is logged in
      isLoggedIn ? (
        <>
          <ModalProvider>
            <Header />
            <Outlet />
          </ModalProvider>
          <div id="modal-root"></div>
        </>
      ) : <UnAuthorized/>
      }
    </>
  );
};

export default Layout;
