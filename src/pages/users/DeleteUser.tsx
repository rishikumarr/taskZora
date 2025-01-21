import { useParams } from "react-router-dom";
import Modal from "../../components/Modal";
import useModal from "../../customHooks/useModal";
import useUsers from "../../customHooks/useUsers";

const DeleteUser = () => {
    const {closeModal} = useModal();
    const {deleteUserById} = useUsers();
    const {userId} = useParams<{userId: string}>();

    const handleConfirmBtn = () => {
        if(userId){
            deleteUserById(userId);
        }
    }

    return(
        <Modal goBackTo="/users">
            <p>Do you really want to delete this user?</p>
            <div>
                <button onClick={()=>closeModal('/users')}>Cancel</button>
                <button onClick={handleConfirmBtn}>Yes</button>
            </div>
        </Modal>
    )
}

export default DeleteUser;