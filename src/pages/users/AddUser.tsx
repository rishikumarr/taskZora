import { useState, useRef } from "react";
import useModal from "../../customHooks/useModal";
import useUsers from "../../customHooks/useUsers";
import Modal from "../../components/Modal";
import CloseIcon from "../../components/CloseIcon";

const AddUser = () => {
  const { closeModal } = useModal();

  const { addUser } = useUsers();

  const [user, setUser] = useState({name: '', email: ''});

  const userNameRef = useRef<HTMLInputElement>(null);
  const userEmailRef = useRef<HTMLInputElement>(null);

  const handleInputs = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;

    const parsedValue = name === "assignedUser" ? +value : value;

    setUser((prevState) => ({ ...prevState, [name]: parsedValue }));
  };

  const handleAddUser = () => {
    if(user.name === ""){
        userNameRef.current?.focus();
        return;
    }
    
    if(user.email === ""){
        userEmailRef.current?.focus();
        return;
    }

    addUser(user);
  };

  return (
    <Modal goBackTo={"/users"}>
    <>
    <div
        className="w-full min-h-60 flex flex-col gap-2">
        <div className="flex justify-between mb-2">
        <h3 className="font-bold italic bg-gradient-to-br from-slate-500 to-slate-800 text-transparent bg-clip-text text-xl">Add User</h3>
          <button onClick={() => closeModal("/users")} className="w-6 h-6" title="Close">
            <CloseIcon className="text-slate-600 hover:text-slate-800 transition-all"/>
          </button>
        </div>
        <hr className="border border-slate-400/70 my-2 border-dashed"/>
        <div className="flex-1 flex flex-col gap-4 py-2">
        <div className="flex flex-col gap-1">
        <span className="text-xs font-semibold text-slate-700">Username</span>
          <input
            type="text"
            name="name"
            placeholder="Enter Username"
            onChange={handleInputs}
            ref={userNameRef}
            className="text-sm h-9 rounded-md px-4 text-slate-800 focus:outline-gray-500"
          />
        </div>
        <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold text-slate-700">User Email</span>
          <input
            type="text"
            name="email"
            placeholder="Enter Email"
            onChange={handleInputs}
            ref={userEmailRef}
            className="text-sm h-9 rounded-md px-4 text-slate-800 focus:outline-gray-500"
          />
              </div>
        </div>
        <hr className="border border-slate-400/70 my-2 border-dashed" />
        <div className="flex justify-end gap-3">
          <button onClick={() => closeModal("/users")} className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-br from-gray-100 to-gray-300 text-gray/85 hover:text-gray border border-gray-400 text-sm shadow-lg active:scale-95 transition">Cancel</button>
          <button onClick={handleAddUser} className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-br from-slate-500 to-slate-700 text-white/85 hover:text-white border-slate-600 text-sm shadow-lg active:scale-95 transition">Add User</button>
        </div>
      </div></>
    </Modal>
  );
};

export default AddUser;
