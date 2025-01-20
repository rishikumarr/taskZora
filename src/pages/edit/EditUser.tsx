import { useParams } from "react-router-dom";

type paramType = {
    userId: string;
}

const EditUser = () => {
    const params = useParams<paramType>();

    return (
        <>EditUser - {params.userId}</>
    )
}

export default EditUser;