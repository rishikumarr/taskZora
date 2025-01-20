import { NavLink } from "react-router-dom";
import useAuth from "../customHooks/useAuth";

const Header = () => {
    const {logOut} = useAuth();

    return (
        <div className="flex justify-between">
            <h1>Tasks</h1>
            <ul className="flex gap-2">
                <li><NavLink to={'/tasks'}>Tasks</NavLink></li>
                <li><NavLink to={'/users'}>Users</NavLink></li>
                <li><button onClick={logOut}>Logout</button></li>
            </ul>
        </div>
    )
}

export default Header;