import { createPortal } from "react-dom";
import useModal from "../customHooks/useModal";

interface ModalProps{
    goBackTo: string;
    children: React.ReactNode;
}

const Modal = ({goBackTo, children}:ModalProps) => {
    const {closeModal} = useModal();
    return createPortal(
        <div className="fixed w-full h-full inset-0 bg-slate-800/80 flex items-center justify-center" onClick={()=>closeModal(goBackTo)}>
            <div className="w-full min-w-80 max-w-[40em] min-h-80 border bg-gradient-to-br from-slate-100 to-slate-300 fade-in p-4 rounded-lg shadow-lg mx-4" onClick={(event) => event.stopPropagation()}>
                {children}
            </div>
        </div>, document.getElementById('modal-root') as HTMLElement
    );
}

export default Modal;