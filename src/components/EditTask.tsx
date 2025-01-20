import useModal from "../customHooks/useModal";

const EditTask= () => {
    const {closeModal} = useModal();

    return(
        <div className="w-full h-full" onClick={(event)=>event.stopPropagation()}>
            <div className="flex justify-between">
                <h3>Edit Task</h3>
                <button onClick={() => closeModal('/tasks')}>X</button>
            </div>
            <div>
            </div>
        </div>
    )
}

export default EditTask;