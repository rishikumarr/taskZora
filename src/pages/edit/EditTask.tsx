import { useParams } from "react-router-dom";

type paramType = {
    taskId: string;
}

const EditTask = () => {
    const params = useParams<paramType>();

    return (
        <>Edit Task - {params.taskId}</>
    )
}

export default EditTask;