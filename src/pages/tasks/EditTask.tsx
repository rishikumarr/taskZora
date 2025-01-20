import { useParams } from "react-router-dom";
import Modal from "../../components/Modal";
import useModal from "../../customHooks/useModal";

const EditTask= () => {
    const {closeModal} = useModal();
    const {taskId} = useParams();

    return(
        <Modal>
            <div className="w-full h-full" onClick={(event)=>event.stopPropagation()}>
                <div className="flex justify-between">
                    <h3>Edit Task</h3>
                    <button onClick={closeModal}>X</button>
                </div>
                <div>
                    {taskId}
                </div>
            </div>
        </Modal>
    )
}

export default EditTask;