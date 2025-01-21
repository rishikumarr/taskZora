import { useEffect } from "react";
import { Link } from "react-router-dom";
import useUsers from "../../customHooks/useUsers";
import Header from "../../components/Header";
import EditIcon from "../../components/EditIcon";
import DeleteIcon from "../../components/DeleteIcon";

const Users = () => {
    const {users, getAllUsers} = useUsers();

    useEffect(()=>{
        getAllUsers();
    }, [getAllUsers]);

    return (
        <>
    <Header/>
      <div className="flex-1 border border-slate-300 rounded-lg border-dashed px-4 shadow-inner overflow-y-auto overflow-x-hidden">
        <div className="px-2 py-2 border-slate-300 border-dashed mt-2">
          <h3 className="font-extrabold italic bg-gradient-to-br from-slate-500 to-slate-800 text-transparent bg-clip-text text-xl text-center slide-in">
            Users
          </h3>
        </div>
        <div className="relative">
          <div className="flex justify-end my-2 sticky inset-0 top-5 z-10">
            <Link
              to="/users/add"
              className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-br from-slate-500 to-slate-700 text-white/85 hover:text-white border-slate-600 text-sm shadow-lg active:scale-95 transition"
            >
              Add User
            </Link>
          </div>
          <div>
            <div className="flex flex-wrap justify-center gap-4">
              {users &&
                users.map((user, index) => {
                  const { id, name, email } = user;
                  return (
                    <div
                      className="flex flex-col gap-2 border border-slate-300 hover:border-slate-400 transition-all w-60 bg-gradient-to-br from-slate-100 to-slate-50 p-4 rounded-lg shadow-sm fade-in"
                      key={`user-${id}`}
                      style={{ "--delay": `${index * 0.1}s` } as React.CSSProperties}
                    >
                      <div className="flex justify-between">
                        <p className="text-base truncate max-w-40 text-slate-800 font-medium capitalize">
                          {name}
                        </p>
                      </div>
                      <hr />
                      <div className="flex items-center">
                            <span className="min-w-16 font-semibold text-slate-600 text-xs">
                            Email:
                            </span>
                            <p className="text-xs truncate max-w-40 text-slate-800 font-medium capitalize">
                          {email}
                        </p>
                        </div>
                        <hr />
                        <div className="flex items-center">
                            <span className="min-w-16 font-semibold text-slate-600 text-xs">
                            Actions:
                            </span>
                            <ul className="flex flex-1 items-center gap-4">
                                <li className="flex items-center">
                                <Link
                                    to={`/users/edit/${id}`}
                                    className="w-5 h-5 inline-block" title="Edit task"
                                >
                                    <EditIcon
                                    className={"w-full h-full text-yellow-700"}
                                    />
                                </Link>
                                </li>
                                <li className="flex items-center">
                                <Link
                                    to={`/users/delete/${id}`}
                                    className="w-5 h-5 inline-block" title="Delete task"
                                >
                                    <DeleteIcon
                                    className={"w-full h-full text-red-900"}
                                    />
                                </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
    )
}

export default Users;