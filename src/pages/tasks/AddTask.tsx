import Modal from "../../components/Modal";
import useModal from "../../customHooks/useModal";

const AddTask = () => {
    const {closeModal} = useModal();

    return(
        <Modal>
            <div className="w-full h-full" onClick={(event)=>event.stopPropagation()}>
                <div className="flex justify-between">
                    <h3>Add Task</h3>
                    <button onClick={closeModal}>X</button>
                </div>
            </div>
        </Modal>
    )
}

export default AddTask;