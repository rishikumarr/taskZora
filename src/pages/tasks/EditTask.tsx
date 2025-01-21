import { useState, useEffect, useRef } from "react";
import Modal from "../../components/Modal";
import useModal from "../../customHooks/useModal";
import useUsers from "../../customHooks/useUsers";
import { TaskInterface } from "../../utils/interfaces/TaskInterface";
import useTasks from "../../customHooks/useTasks";
import { useParams } from "react-router-dom";
import CloseIcon from "../../components/CloseIcon";

const EditTask = () => {
  const { closeModal } = useModal();
  const {taskId} = useParams<{taskId: string}>();
  const { users, getAllUsers } = useUsers();
  const {getTaskById, editTaskById} = useTasks();

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

  const taskNameRef = useRef<HTMLInputElement>(null);
  const taskDescriptionRef = useRef<HTMLInputElement>(null);
  const taskDueRef = useRef<HTMLInputElement>(null);

  const tagsHandler = (tag:string) => {
    const {tags: currentTags} = task;
    
    if(!currentTags.includes(tag)){
        setTask((prevState) => ({ ...prevState, tags: [...prevState.tags, tag] }));
    }
    else{
        setTask((prevState) => ({...prevState, tags: prevState.tags.filter((t) => t !== tag)}));
    }
  }

  const handleInputs = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    const parsedValue = name === "assignedUser" ? +value : value;

    setTask((prevState) => ({ ...prevState, [name]: parsedValue }));
  };

  const handleEditTask = () => {
    if(task.title === ""){
        taskNameRef.current?.focus();
        return;
    }
    
    if(task.description === ""){
        taskDescriptionRef.current?.focus();
        return;
    }

    if(task.dueDate === ""){
        taskDueRef.current?.focus();
        return;
    }

    if(taskId){
        editTaskById(taskId, task);
    }
  };

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

  return (
    <>{task && 
    <Modal goBackTo={"/tasks"}>
      <div
        className="w-full min-h-80 flex flex-col gap-2"
      >
        <div className="flex justify-between">
        <h3 className="font-bold italic bg-gradient-to-br from-slate-500 to-slate-800 text-transparent bg-clip-text text-xl">Edit Task</h3>
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
            onChange={handleInputs}
            ref={taskNameRef}
            value={task.title}
            className="text-sm h-9 rounded-md px-4 text-slate-800 focus:outline-gray-500"
          />
        </div>
        <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold text-slate-700">Task Description</span>
          <input
            type="text"
            name="description"
            placeholder="Enter todo description"
            onChange={handleInputs}
            ref={taskDescriptionRef}
            value={task.description}
            className="text-sm h-9 rounded-md px-4 text-slate-800 focus:outline-gray-500"
          />
              </div>
              <div className="flex flex-wrap gap-5">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold text-slate-700">Task Status</span>
              <select name="status"  className="rounded-md px-2 py-1 focus:outline-gray-500 text-sm" onChange={handleInputs} value={task.status}>
                <option value="todo">To Do</option>
                <option value="inProgress">In Progress</option>
                <option value="done">Done</option>
              </select>
              </div>
              <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold text-slate-700">Due Date</span>
          <input type="date" name="dueDate" onChange={handleInputs}  className="rounded-md px-2 py-1 focus:outline-gray-500 text-sm" ref={taskDueRef} value={task.dueDate}/>
              </div>
              <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold text-slate-700">Task Status</span>
              
              <select name="assignedUser"  className="rounded-md px-2 py-1 focus:outline-gray-500 text-sm" onChange={handleInputs} value={task.assignedUser}>
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
                  <li key={`tag-${index}`} data-tag={tag} className={`capitalize border px-4 py-1 rounded-full border-slate-400 text-xs cursor-pointer font-semibold ${task.tags.includes(tag) ? `bg-gradient-to-br from-slate-500 to-slate-700 text-white` : `bg-white text-slate-700`}`} onClick={()=>tagsHandler(tag)}>
                    {tag}
                  </li>
                ))}
              </ul>
              </div>
                
              <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold text-slate-700">Task Priority</span>
              <div className="w-fit flex items-center gap-3">

            <label htmlFor="low" className="flex items-center gap-2 cursor-pointer border border-slate-400 bg-slate-300 px-3 py-1 rounded-full">
            <input
              type="radio"
              name="priority"
              value="low"
              id="low"
              onChange={handleInputs}
              checked={task.priority === 'low'}
              className="accent-slate-700"
            />
              <span className="text-xs font-semibold text-slate-800">Low</span>

            </label>
            <label htmlFor="high" className="flex items-center gap-2 cursor-pointer border border-slate-400  bg-slate-300 px-3 py-1 rounded-full">
            <input
              type="radio"
              name="priority"
              value="high"
              id="high"
              onChange={handleInputs}
              checked={task.priority === 'high'}
              className="accent-slate-700"
            />
              <span className="text-xs font-semibold text-slate-800">High</span>
            </label>
              </div>
              </div>
        </div>
        <hr className="border border-slate-400/70 my-2 border-dashed" />
        <div className="flex justify-end gap-3">
          <button onClick={() => closeModal("/tasks")} className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-br from-gray-100 to-gray-300 text-gray/85 hover:text-gray border border-gray-400 text-sm shadow-lg active:scale-95 transition">Cancel</button>
          <button onClick={handleEditTask} className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-br from-slate-500 to-slate-700 text-white/85 hover:text-white border-slate-600 text-sm shadow-lg active:scale-95 transition">Edit Task</button>
        </div>
      </div>
    </Modal>}</>
  );
};

export default EditTask;
