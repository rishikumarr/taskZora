import { NavLink } from "react-router-dom";
import useAuth from "../customHooks/useAuth";

const Header = () => {
  const { userData, logOut } = useAuth();

  const navLinkStyles = "inline-block px-4 py-1 navlink rounded-md bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-400"

  return (
    <div className="flex items-center justify-between min-h-12 text-slate-800 mb-3 flex-col gap-2 lg:flex-row">
      <h1 className="font-extrabold italic bg-gradient-to-br from-slate-500 to-slate-800 text-transparent bg-clip-text text-xl self-start">
        ZORA
      </h1>
      <ul className="flex gap-3">
        <li className="text-sm font-semibold">
          <NavLink
            to={"/tasks"}
            className={({ isActive }) =>
              isActive ? `${navLinkStyles} active` : `${navLinkStyles}`
            }
          >
            Tasks
          </NavLink>
        </li>
        <li className="text-sm font-semibold">
          <NavLink
            to={"/users"}
            className={({ isActive }) =>
              isActive ? `${navLinkStyles} active` : `${navLinkStyles}`
            }
          >
            Users
          </NavLink>
        </li>
      </ul>
      <ul className="flex flex-col items-center gap-2">
        <li>
          <div className="flex items-center gap-1">
            <span className="w-5 h-5 bg-slate-300 inline-block rounded-full border border-slate-400"></span>
            <span className="text-xs capitalize font-semibold text-slate-600">{userData.name}</span>
          </div>
        </li>
        <li className="text-sm font-semibold rounded-md transition-all text-red- border border-red-300 hover:bg-red-100 hover:text-red-700 text-red-600">
          <button className="px-3 py-1 cursor-pointer" onClick={logOut}>Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
