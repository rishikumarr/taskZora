import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import useTasks from "./customHooks/useTasks";

const TasksLayout = () => {
    const {tasks, getAllTasks} = useTasks();

    useEffect(()=>{
        getAllTasks();
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