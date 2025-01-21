import { useParams } from "react-router-dom";
import Modal from "../../components/Modal";
import useModal from "../../customHooks/useModal";
import useUsers from "../../customHooks/useUsers";
import CloseIcon from "../../components/CloseIcon";

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
            <div
        className="w-full min-h-80 flex flex-col gap-2">
            <div className="flex justify-between mb-2">
          <h3 className="font-bold italic bg-gradient-to-br from-slate-500 to-slate-800 text-transparent bg-clip-text text-xl">Delete User</h3>
          <button onClick={() => closeModal("/users")} className="w-6 h-6" title="Close">
            <CloseIcon className="text-slate-600 hover:text-slate-800 transition-all"/>
          </button>
        </div>
        <hr className="border border-slate-400/70 my-2 border-dashed" />
        <div className="flex-1 flex items-center justify-center">
            <p className="text-slate-700 font-semibold">Do you really want to delete this user?</p>
        </div>
        <hr className="border border-slate-400/70 my-2 border-dashed" />
            <div className="flex justify-end gap-3">
                <button className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-br from-gray-100 to-gray-300 text-gray/85 hover:text-gray border border-gray-400 text-sm shadow-lg active:scale-95 transition" onClick={()=>closeModal('/users')}>Cancel</button>
                <button className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-br from-slate-500 to-slate-700 text-white/85 hover:text-white border-slate-600 text-sm shadow-lg active:scale-95 transition min-w-24" onClick={handleConfirmBtn}>Yes</button>
            </div>
        </div>
        </Modal>
    )
}

export default DeleteUser;