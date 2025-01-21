import { useState, useCallback } from "react";
import { TaskInterface } from "../utils/interfaces/TaskInterface";
import useModal from "./useModal";

interface useTasksType{
    tasks:TaskInterface[];
    getAllTasks: ()=>void;
    getTaskById: (taskId: string)=>Promise<TaskInterface | null>;
    addTask: (task: TaskInterface) => Promise<void>;
    editTaskById: (taskId: string, updatedTask: TaskInterface)=>Promise<void>;
    deleteTaskById: (taskId: string)=>Promise<void>;
}

const useTasks = ():useTasksType => {
    const {closeModal} = useModal();

    const [tasks, setTasks] = useState<TaskInterface[]>([]);

    const endPoint = `http://localhost:3000/todo`;

    const getAllTasks = useCallback(async() => {
        try{
            const response = await fetch(endPoint);
    
            if(!response.ok){
                throw new Error('Failed to fetch tasks');
            }

            const data: TaskInterface[] = await response.json();

            setTasks(data);
        }
        catch(error){
            console.log(error);
        }
    }, [])

    const getTaskById = async(taskId:  string) => {
        try{
            const response = await fetch(`${endPoint}/${taskId}`);

            if(!response.ok){
                throw new Error(`Failed to fetch task with ID ${taskId}`);
            }
    
            const data = await response.json();
    
            return data;
        }
        catch(error){
            console.log(error);
            return null;
        }
    }

    const addTask = async(task: TaskInterface) => {
        try{
            const response = await fetch(endPoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(task),
            });

            if(!response.ok){
                throw new Error('Error in adding the task');
            }
            
            // setTasks((prevTasks) => [...prevTasks, newTask]);
            getAllTasks();

            closeModal('/');
        }
        catch(error){
            console.log(error);
        }
    }

    const editTaskById = useCallback(async(taskId: string, updatedTask: TaskInterface) => {
        try{
            const response = await fetch(`${endPoint}/${taskId}`, 
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(updatedTask)
                }
            );

            if(!response.ok){
                throw new Error("Error in updating the task");
            }

            // await response.json();

            getAllTasks();

            // setTasks((prevTasks) =>
            //     prevTasks.map((task) =>
            //       task.id === taskId ? { ...task, ...updatedData } : task
            //     )
            //   );
        
              closeModal("/");
        }
        catch(error){
            console.log(error);
        }
    }, [])

    const deleteTaskById = async (taskId: string) => {
        try{
            const response = await fetch(`${endPoint}/${taskId}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if(!response.ok){
                throw new Error('Error in deleting the task');
            }
            getAllTasks();

            closeModal('/');
        }
        catch(error){
            console.log(error);
        }
    }

    return {tasks, getAllTasks, getTaskById, addTask, editTaskById, deleteTaskById}
}

export default useTasks;