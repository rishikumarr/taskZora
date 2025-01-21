import { useState, useEffect, useRef } from "react";
import useModal from "../../customHooks/useModal";
import useUsers from "../../customHooks/useUsers";
import { useParams } from "react-router-dom";
import Modal from "../../components/Modal";

const EditUser = () => {
  const { closeModal } = useModal();
  const [user, setUser] = useState({name: '', email: ''});
  const {userId} = useParams<{userId: string}>();
  const {getUserById, editUserById} =  useUsers();

  const userNameRef = useRef<HTMLInputElement>(null);
  const userEmailRef = useRef<HTMLInputElement>(null);

  const handleInputs = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;

    const parsedValue = name === "assignedUser" ? +value : value;

    setUser((prevState) => ({ ...prevState, [name]: parsedValue }));
  };

  const handleEditUser = () => {
    if(user.name === ""){
        userNameRef.current?.focus();
        return;
    }
    
    if(user.email === ""){
        userEmailRef.current?.focus();
        return;
    }

    if(userId){
        editUserById(userId, user);
    }
  };

  useEffect(() => {
    const fetchTask = async() => {
        if(userId){
            const user = await getUserById(userId);
            if(user){
                setUser(user);
            }
        }
    }

    fetchTask();
  }, [userId]);


  return (
    <>{user && 
        <Modal goBackTo={"/users"}>
        <div
          className="w-full min-h-full flex flex-col gap-2"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex justify-between">
            <h3>Edit User</h3>
            <button onClick={() => closeModal("/users")}>X</button>
          </div>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Enter Username"
              onChange={handleInputs}
              ref={userNameRef}
              value={user.name}
            />
            <input
              type="text"
              name="email"
              placeholder="Enter Email"
              onChange={handleInputs}
              ref={userEmailRef}
              value={user.email}
            />
          </div>
          <div>
            <button onClick={() => closeModal("/users")}>Cancel</button>
            <button onClick={handleEditUser}>Edit User</button>
          </div>
        </div>
      </Modal>
      }</>
  );
};

export default EditUser;
