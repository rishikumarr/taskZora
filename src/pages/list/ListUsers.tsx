import { NavLink, Outlet } from "react-router-dom";

const ListUsers = () => {
    return (
        <>
        <NavLink key={4} to={''}/>
        List of Users
        <br/>
        <Outlet/>
        </>
    )
}

export default ListUsers;