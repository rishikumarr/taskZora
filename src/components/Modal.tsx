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
            <div className="w-80 min-h-80 border bg-white fade-in">
                {children}
            </div>
        </div>, document.getElementById('modal-root') as HTMLElement
    );
}

export default Modal;