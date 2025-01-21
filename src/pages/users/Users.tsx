import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import useUsers from "../../customHooks/useUsers";

const Users = () => {
    const {users, getAllUsers} = useUsers();

    useEffect(()=>{
        getAllUsers();
    }, [getAllUsers]);

    return (
        <>
            <div>
                <p>List of Users</p>
                <div className="flex justify-end">
                    <Link to="/users/add">Add User</Link>
                </div>
                <div className="grid grid-cols-4 gap-2">
                    {users && users.map((user) => {
                        const {id, name, email} = user;
                        return (
                        <div className="flex flex-col gap-2 border" key={`user-${id}`}>
                            <div className="flex justify-between">
                                <div>
                                <p>{name}</p>
                                <p>{email}</p>
                                </div>
                                
                                <div>
                                    <ul className="text-xs">
                                        <li><Link to={`/users/edit/${id}`}>Edit</Link></li>
                                         <li>
                                            <Link to={`/users/delete/${id}`}>Delete</Link>
                                         </li>
                                    </ul>
                                </div>
                            </div>
                        </div>)
                    })}
                </div>
            </div>
            <Outlet/>
        </>
    )
}

export default Users;