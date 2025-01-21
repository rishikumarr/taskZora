import { useParams } from "react-router-dom";
import Modal from "../../components/Modal";
import useModal from "../../customHooks/useModal";
import useTasks from "../../customHooks/useTasks";
import CloseIcon from "../../components/CloseIcon";

const DeleteTask = () => {
    const {closeModal} = useModal();
    const {deleteTaskById} = useTasks();
    const {taskId} = useParams<{taskId: string}>();

    const handleConfirmBtn = () => {
        if(taskId){
            deleteTaskById(taskId);
        }
    }

    return(
        <Modal goBackTo="/tasks">
            <div
        className="w-full min-h-80 flex flex-col gap-2">
        <div className="flex justify-between mb-2">
          <h3 className="font-bold italic bg-gradient-to-br from-slate-500 to-slate-800 text-transparent bg-clip-text text-xl">Delete Task</h3>
          <button onClick={() => closeModal("/tasks")} className="w-6 h-6" title="Close">
            <CloseIcon className="text-slate-600 hover:text-slate-800 transition-all"/>
          </button>
        </div>
        <hr className="border border-slate-400/70 my-2 border-dashed" />
        <div className="flex-1 flex items-center justify-center">
            <p className="text-slate-700 font-semibold">Do you really want to delete this task?</p>
        </div>
            <hr className="border border-slate-400/70 my-2 border-dashed" />
            <div className="flex justify-end gap-3">
          <button onClick={() => closeModal("/tasks")} className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-br from-gray-100 to-gray-300 text-gray/85 hover:text-gray border border-gray-400 text-sm shadow-lg active:scale-95 transition">Cancel</button>
          <button onClick={handleConfirmBtn} className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-br from-slate-500 to-slate-700 text-white/85 hover:text-white border-slate-600 text-sm shadow-lg active:scale-95 transition min-w-24">Yes</button>
        </div>
        </div>
        </Modal>
    )
}

export default DeleteTask;