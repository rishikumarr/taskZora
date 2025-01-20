import useModal from "../customHooks/useModal";

type EditTaskPropType = {
    id: string
}

const EditTask:React.FC<EditTaskPropType> = ({id}) => {
    const {closeModal} = useModal();


    return(
        <div className="w-full h-full">
            <div className="flex justify-between">
                <h3>Edit Task</h3>
                <button onClick={closeModal}>X</button>
            </div>
            <div>
                {id}
            </div>
        </div>
    )
}

export default EditTask;