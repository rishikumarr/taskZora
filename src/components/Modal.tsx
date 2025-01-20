import { createPortal } from "react-dom";

interface ModalProps{
    children: React.ReactNode;
}

const Modal = ({children}:ModalProps) => {
    return createPortal(
        <div className="fixed w-full h-full inset-0 bg-slate-50/80 flex items-center justify-center">
            <div className="w-80 min-h-80 border bg-white">
                {children}
            </div>
        </div>, document.getElementById('modal-root') as HTMLElement
    );
}

export default Modal;