import { useParams } from "react-router-dom";
import Modal from "../../components/Modal";
import useModal from "../../customHooks/useModal";
import { useEffect, useState } from "react";
import useTasks from "../../customHooks/useTasks";
import { TaskInterface } from "../../utils/interfaces/TaskInterface";

const EditTask= () => {
    const {closeModal} = useModal();
    const {taskId} = useParams<{taskId: string}>();

    const [task, setTask] = useState<TaskInterface | null>(null);

    const {getTaskById} = useTasks();

    useEffect(()=>{
        const fetchTask = async () => {
            if(taskId){
                const task = await getTaskById(taskId);
                setTask(task);
                console.log(task);
            }
        }

        fetchTask();
    }, [taskId]);

    return(
       <>{task &&
        <Modal goBackTo={'/tasks'}>
            <div className="w-full h-full" onClick={(event)=>event.stopPropagation()}>
                <div className="flex justify-between">
                    <h3>Edit Task</h3>
                    <button onClick={()=>closeModal('/tasks')}>X</button>
                </div>
                <div>
                    <p>{task.title}</p>
                </div>
            </div>
        </Modal>}
        </>
    )
}

export default EditTask;