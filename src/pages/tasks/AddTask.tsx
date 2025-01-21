import { useState, useEffect, useRef } from "react";
import Modal from "../../components/Modal";
import useModal from "../../customHooks/useModal";
import useUsers from "../../customHooks/useUsers";
import { TaskInterface } from "../../utils/interfaces/TaskInterface";
import useTasks from "../../customHooks/useTasks";

const AddTask = () => {
  const { closeModal } = useModal();
  const { users, getAllUsers } = useUsers();
  const [task, setTask] = useState<TaskInterface>({
    title: "",
    description: "",
    status: "todo",
    dueDate: "",
    assignedUser: 0,
    priority: "low",
    tags: [],
  });
  const {addTask} = useTasks();

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

  const handleAddTask = () => {
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

    addTask(task);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <Modal goBackTo={"/tasks"}>
      <div
        className="w-full min-h-full flex flex-col gap-2"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex justify-between">
          <h3>Add Task</h3>
          <button onClick={() => closeModal("/tasks")}>X</button>
        </div>
        <div>
          <input
            type="text"
            name="title"
            placeholder="Enter todo"
            onChange={handleInputs}
            ref={taskNameRef}
          />
          <input
            type="text"
            name="description"
            placeholder="Enter todo description"
            onChange={handleInputs}
            ref={taskDescriptionRef}
          />
          <select name="status" onChange={handleInputs}>
            <option value="todo">To Do</option>
            <option value="inProgress">In Progress</option>
            <option value="done">Done</option>
          </select>
          <input type="date" name="dueDate" onChange={handleInputs} ref={taskDueRef}/>
          <select name="assignedUser" onChange={handleInputs}>
            {users.map((user) => {
              const { id, name } = user;
              return (
                <option key={id} value={id}>
                  {name}
                </option>
              );
            })}
          </select>

          <ul>
            {tags.map((tag, index) => (
              <li key={`tag-${index}`} data-tag={tag} className={`capitalize border ${task.tags.includes(tag) ? `bg-gray-200` : `bg-white`}`} onClick={()=>tagsHandler(tag)}>
                {tag}
              </li>
            ))}
          </ul>

          <label htmlFor="low">Low</label>
          <input
            type="radio"
            name="priority"
            value="low"
            id="low"
            onChange={handleInputs}
            checked={task.priority === 'low'}
          />
          <label htmlFor="high">High</label>
          <input
            type="radio"
            name="priority"
            value="high"
            id="high"
            onChange={handleInputs}
            checked={task.priority === 'high'}
          />
        </div>
        <div>
          <button onClick={() => closeModal("/tasks")}>Cancel</button>
          <button onClick={handleAddTask}>Add Task</button>
        </div>
      </div>
    </Modal>
  );
};

export default AddTask;
