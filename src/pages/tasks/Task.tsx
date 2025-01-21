import { useParams } from "react-router-dom";
import Modal from "../../components/Modal";
import useTasks from "../../customHooks/useTasks";
import { useEffect, useState } from "react";
import { TaskInterface } from "../../utils/interfaces/TaskInterface";
import useModal from "../../customHooks/useModal";
import CloseIcon from "../../components/CloseIcon";
import useUsers from "../../customHooks/useUsers";

const Task = () => {
    const {closeModal} = useModal();
    const {taskId} = useParams<{taskId: string}>();
    const { users, getAllUsers } = useUsers();
    const {getTaskById} = useTasks();
    const [task, setTask] = useState<TaskInterface>({
        title: "",
        description: "",
        status: "todo",
        dueDate: "",
        assignedUser: 0,
        priority: "low",
        tags: [],
      });

      const tags = ["work", "personal", "other"];

      useEffect(() => {
        const fetchTask = async() => {
            if(taskId){
                const task = await getTaskById(taskId);
                if(task){
                    setTask(task);
                }
            }
        }
    
        fetchTask();
      }, [taskId]);

      useEffect(() => {
        getAllUsers();
      }, []);

    return <Modal goBackTo="/tasks">
        {
            task && <div
            className="w-full min-h-80 flex flex-col gap-2"
          >
            <div className="flex justify-between">
            <h3 className="font-bold italic bg-gradient-to-br from-slate-500 to-slate-800 text-transparent bg-clip-text text-xl">View Task</h3>
              <button onClick={() => closeModal("/tasks")} className="w-6 h-6" title="Close">
                <CloseIcon className="text-slate-600 hover:text-slate-800 transition-all"/>
              </button>
            </div>
            <hr className="border border-slate-400/70 my-2 border-dashed"/>
            <div className="flex-1 flex flex-col gap-4 justify-between py-2">
            <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold text-slate-700">Task Title</span>
              <input
                type="text"
                name="title"
                placeholder="Enter todo"
                disabled
                value={task.title}
                className="text-sm h-9 rounded-md px-4 text-slate-800 focus:outline-gray-500 disabled:bg-white"
              />
            </div>
            <div className="flex flex-col gap-1">
                  <span className="text-xs font-semibold text-slate-700">Task Description</span>
              <input
                type="text"
                name="description"
                placeholder="Enter todo description"
                disabled
                value={task.description}
                className="text-sm h-9 rounded-md px-4 text-slate-800 focus:outline-gray-500 disabled:bg-white"
              />
                  </div>
                  <div className="flex flex-wrap gap-5">
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-semibold text-slate-700">Task Status</span>
                  <select name="status" disabled className="rounded-md px-2 py-1 focus:outline-gray-500 text-sm disabled:bg-white" value={task.status}>
                    <option value="todo">To Do</option>
                    <option value="inProgress">In Progress</option>
                    <option value="done">Done</option>
                  </select>
                  </div>
                  <div className="flex flex-col gap-1">
                  <span className="text-xs font-semibold text-slate-700">Due Date</span>
              <input type="date" name="dueDate" disabled className="rounded-md px-2 py-1 focus:outline-gray-500 text-sm disabled:bg-white" value={task.dueDate}/>
                  </div>
                  <div className="flex flex-col gap-1">
                  <span className="text-xs font-semibold text-slate-700">Task Status</span>
                  
                  <select name="assignedUser" disabled className="rounded-md px-2 py-1 focus:outline-gray-500 text-sm disabled:bg-white" value={task.assignedUser}>
                    {users.map((user) => {
                      const { id, name } = user;
                      return (
                        <option key={id} value={id}>
                          {name}
                        </option>
                      );
                    })}
                  </select>
                  </div>
                  </div>
                  <div className="flex flex-col gap-1">
                  <span className="text-xs font-semibold text-slate-700">Tags</span>
                  <ul className="flex gap-2">
                    {tags.map((tag, index) => (
                      <li key={`tag-${index}`} data-tag={tag} className={`capitalize border px-4 py-1 rounded-full border-slate-400 text-xs  font-semibold ${task.tags.includes(tag) ? `bg-gradient-to-br from-slate-500 to-slate-700 text-white` : `bg-white text-slate-700`}`}>
                        {tag}
                      </li>
                    ))}
                  </ul>
                  </div>
                    
                  <div className="flex flex-col gap-1">
                  <span className="text-xs font-semibold text-slate-700">Task Priority</span>
                  <div className="w-fit flex items-center gap-3">
    
                <label htmlFor="low" className="flex items-center gap-2 border border-slate-400 bg-slate-300 px-3 py-1 rounded-full">
                <input
                  type="radio"
                  name="priority"
                  value="low"
                  id="low"
                  disabled
                  checked={task.priority === 'low'}
                  className="accent-slate-700"
                />
                  <span className="text-xs font-semibold text-slate-800">Low</span>
    
                </label>
                <label htmlFor="high" className="flex items-center gap-2 border border-slate-400  bg-slate-300 px-3 py-1 rounded-full">
                <input
                  type="radio"
                  name="priority"
                  value="high"
                  id="high"
                  disabled
                  checked={task.priority === 'high'}
                  className="accent-slate-700"
                />
                  <span className="text-xs font-semibold text-slate-800">High</span>
                </label>
                  </div>
                  </div>
            </div>
          </div>
        }
    </Modal>
}

export default Task;