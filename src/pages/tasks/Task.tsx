import { useParams } from "react-router-dom";
import Modal from "../../components/Modal";
import useTasks from "../../customHooks/useTasks";
import { useEffect, useState } from "react";
import { TaskInterface } from "../../utils/interfaces/TaskInterface";
import useModal from "../../customHooks/useModal";

const Task = () => {
    const {closeModal} = useModal();
    const {taskId} = useParams<{taskId: string}>();
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

    return <Modal goBackTo="/tasks">
        {
            task && <div>
                <div>
                    <button onClick={() => closeModal('/tasks')}>Go Back</button>
                </div>
                <p>{task.title}</p>
                <p>{task.description}</p>
                <p>{task.dueDate}</p>
            </div>
        }
    </Modal>
}

export default Task;