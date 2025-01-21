import { useState, useRef } from "react";
import useModal from "../../customHooks/useModal";
import useUsers from "../../customHooks/useUsers";
import Modal from "../../components/Modal";

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
        className="w-full min-h-full flex flex-col gap-2"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex justify-between">
          <h3>Add User</h3>
          <button onClick={() => closeModal("/users")}>X</button>
        </div>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Enter Username"
            onChange={handleInputs}
            ref={userNameRef}
          />
          <input
            type="text"
            name="email"
            placeholder="Enter Email"
            onChange={handleInputs}
            ref={userEmailRef}
          />
        </div>
        <div>
          <button onClick={() => closeModal("/users")}>Cancel</button>
          <button onClick={handleAddUser}>Add User</button>
        </div>
      </div></>
    </Modal>
  );
};

export default AddUser;
