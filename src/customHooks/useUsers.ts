import { useState } from "react";
import { UserInterface } from "../utils/interfaces/UserInterface";

interface useUsersType{
    users:UserInterface[];
    getAllUsers: ()=>void;
    getUserById: (taskId: string)=>Promise<UserInterface | null>;
    // editUserById: (userId: string)=>void;
    // deleteUserById: (userId: string)=>void;
}

const useUsers = ():useUsersType => {
    const [users, setUsers] = useState<UserInterface[]>([]);

    const endPoint = `http://localhost:3000/users`;

    const getAllUsers = async() => {
        try{
            const response = await fetch(endPoint);
    
            if(!response.ok){
                throw new Error('Failed to fetch tasks');
            }

            const data: UserInterface[] = await response.json();

            setUsers(data);
        }
        catch(error){
            console.log(error);
        }
    }

    const getUserById = async(userId:  string) => {
        try{
            const response = await fetch(`${endPoint}/${userId}`);

            if(!response.ok){
                throw new Error(`Failed to fetch task with ID ${userId}`);
            }
    
            const data = await response.json();
    
            return data;
        }
        catch(error){
            console.log(error);
            return null;
        }
    }

    // const editUserById = (userId: string) => {

    // }

    // const deleteUserById = (userId: string) => {

    // }

    return {users, getAllUsers, getUserById}
}

export default useUsers;