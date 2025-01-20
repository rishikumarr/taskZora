import { useEffect, useState } from "react";
import { TaskInterface } from "./utils/interfaces/TaskInterface";
import { Link, Outlet } from "react-router-dom";

const TasksLayout = () => {
    const [tasks, setTasks] = useState<TaskInterface[]>([]);

    useEffect(()=>{
        const fetchTasks = async () => {
            const response = await fetch('http://localhost:3000/todo');

            const data: TaskInterface[] = await response.json();

            try{
                if(!response.ok){
                    throw new Error('Failed to fetch tasks');
                }

                setTasks(data);
                console.log(tasks);
            }
            catch(error){
                console.log(error);
            }
        }

        fetchTasks();
    }, []);

    return (
        <>
            <div>
                <p>List of tasks</p>
                <div className="flex justify-end">
                    <Link to="/tasks/add">Add task</Link>
                    {/* <button onClick={openModal}>Add Task</button> */}
                </div>
                <div className="grid grid-cols-4 gap-2">
                    {tasks && tasks.map((task) => {
                        const {id, title} = task;
                        return (
                        <div className="flex flex-col gap-2 border" key={`task-${id}`}>
                            <div className="flex justify-between">
                                <span>{title}</span>
                                <div>
                                    <ul className="text-xs">
                                        <li><Link to={`/tasks/edit/${id}`}>Edit</Link></li>
                                        {/* <li><button onClick={openModal}>Edit</button></li> */}
                                        <li>Delete</li>
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

export default TasksLayout;