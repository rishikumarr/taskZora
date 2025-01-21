import { useState } from "react";
import { TaskInterface } from "../utils/interfaces/TaskInterface";

interface useTasksType{
    tasks:TaskInterface[];
    getAllTasks: ()=>void;
    getTaskById: (taskId: string)=>Promise<TaskInterface | null>;
    addTask: (task: TaskInterface) => Promise<void>;
    // editTaskById: (taskId: string)=>void;
    // deleteTaskById: (taskId: string)=>void;
}

const useTasks = ():useTasksType => {
    const [tasks, setTasks] = useState<TaskInterface[]>([]);

    const endPoint = `http://localhost:3000/todo`;

    const getAllTasks = async() => {
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
    }

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
            
            const newTask = await response.json();

            setTasks(prevTasks => [...prevTasks, newTask]);
        }
        catch(error){
            console.log(error);
        }
    }

    // const editTaskById = (taskId: string) => {

    // }

    // const deleteTaskById = (taskId: string) => {

    // }

    return {tasks, getAllTasks, getTaskById, addTask}
}

export default useTasks;