import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

export interface ModalContextType{
    isModalOpen: boolean;
    openModal: () => void;
    closeModal: (path:string) => void;
}

export const ModalContext = createContext<ModalContextType | null>(null);

interface ModalProviderProps {
    children: React.ReactNode;
}

export const ModalProvider:React.FC<ModalProviderProps> = ({children}) => {
    const navigate = useNavigate();

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = (path:string) => {
        navigate(path);
        setIsModalOpen(false);
    }

    const values = {
        isModalOpen,
        openModal,
        closeModal
    }

    return (
        <ModalContext.Provider value={values}>
            {children}
        </ModalContext.Provider>
    );
}