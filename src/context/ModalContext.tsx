import { useState, createContext } from "react";
import Modal from "../components/Modal";
import AddTask from "../components/AddTask";
import EditTask from "../components/EditTask";

type ModalType = 'add-task' | 'edit-task' | 'add-user' | 'edit-user';

export interface ModalContextType{
    modalState: {isOpen: boolean, component: React.ReactNode};
    openModal: (modalType: ModalType, id?:string) => void;
    closeModal: () => void;
}

export const ModalContext = createContext<ModalContextType | null>(null);

interface ModalProviderProps {
    children: React.ReactNode;
}

export const ModalProvider:React.FC<ModalProviderProps> = ({children}) => {
    const [modalState, setModalState] = useState<{isOpen: boolean; component: React.ReactNode}>({isOpen: false, component: null});

    const openModal = (modalType: ModalType, id?:string) => {
        let renderComponent;

        switch(modalType){
            case 'add-task':
                renderComponent = <AddTask/>;
                break;
            case 'edit-task':
                renderComponent = <>{id && <EditTask id={id}/>}</>;
                break;
            case 'add-user':
                renderComponent = <div>Add User</div>;
                break;
            case 'edit-user':
                renderComponent = <div>Edit User</div>;
                break;
            default:
                renderComponent = null;
        }

        setModalState({isOpen: true, component:renderComponent})
    }

    const closeModal = () => {
        setModalState({isOpen: false, component: null});
    }

    const values = {
        modalState,
        openModal,
        closeModal
    }

    return (
        <ModalContext.Provider value={values}>
            {children}
            {modalState.isOpen && <Modal>{modalState.component}</Modal>}
        </ModalContext.Provider>
    );
}