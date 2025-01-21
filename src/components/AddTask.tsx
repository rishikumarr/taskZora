import useModal from "../customHooks/useModal";

const AddTask = () => {
    const {closeModal} = useModal();

    return(
        <div className="w-full h-full" onClick={(event)=>event.stopPropagation()}>
            <div className="flex justify-between">
                <h3>Add Task</h3>
                <button onClick={()=>closeModal('/tasks')}>X</button>
            </div>
        </div>
    )
}

export default AddTask;