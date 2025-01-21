import { useState, useCallback } from "react";
import { UserInterface } from "../utils/interfaces/UserInterface";
import useModal from "./useModal";

interface useUsersType {
  users: UserInterface[];
  getAllUsers: () => void;
  getUserById: (taskId: string) => Promise<UserInterface | null>;
  addUser: (user: UserInterface) => Promise<void>;
  editUserById: (userId: string, updatedUser: UserInterface) => Promise<void>;
  deleteUserById: (userId: string) => Promise<void>;
}

const useUsers = (): useUsersType => {
  const { closeModal } = useModal();

  const [users, setUsers] = useState<UserInterface[]>([]);

  const endPoint = `http://localhost:3000/users`;

  const getAllUsers = useCallback(async () => {
    try {
      const response = await fetch(endPoint);

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const data: UserInterface[] = await response.json();

      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getUserById = async (userId: string) => {
    try {
      const response = await fetch(`${endPoint}/${userId}`);

      if (!response.ok) {
        throw new Error(`Failed to fetch user with ID ${userId}`);
      }

      const data = await response.json();

      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const addUser = async (user: UserInterface) => {
    try {
      setUsers((prevUsers) => [...prevUsers, user]);

      const response = await fetch(endPoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error("Error in adding the user");
      }

      getAllUsers();

      closeModal("/users");
    } catch (error) {
      console.log(error);
    }
  };

  const editUserById = useCallback(
    async (userId: string, updatedUser: UserInterface) => {
      try {
        const response = await fetch(`${endPoint}/${userId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUser),
        });

        if (!response.ok) {
          throw new Error("Error in updating the user");
        }

        getAllUsers();

        closeModal("/users");
      } catch (error) {
        console.log(error);
      }
    },
    []
  );

  const deleteUserById = async (userId: string) => {
    try {
      const response = await fetch(`${endPoint}/${userId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Error in deleting the user");
      }
      getAllUsers();

      closeModal("/users");
    } catch (error) {
      console.log(error);
    }
  };

  return {
    users,
    getAllUsers,
    getUserById,
    addUser,
    editUserById,
    deleteUserById,
  };
};

export default useUsers;
