import { useParams } from "react-router-dom";
import Modal from "../../components/Modal";
import useModal from "../../customHooks/useModal";
import useTasks from "../../customHooks/useTasks";

const DeleteTask = () => {
    const {closeModal} = useModal();
    const {deleteTaskById} = useTasks();
    const {taskId} = useParams<{taskId: string}>();

    const handleConfirmBtn = () => {
        if(taskId){
            deleteTaskById(taskId);
        }
    }

    return(
        <Modal goBackTo="/tasks">
            <p>Do you really want to delete this task?</p>
            <div>
                <button onClick={()=>closeModal('/tasks')}>Cancel</button>
                <button onClick={handleConfirmBtn}>Yes</button>
            </div>
        </Modal>
    )
}

export default DeleteTask;