import { useParams } from "react-router-dom";

const User = () => {
    const {userId} = useParams();
    return(
        <>User - {userId}</>
    )
}

export default User;