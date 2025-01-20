import { useState, createContext } from "react";

export interface ModalContextType{
    isModalOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}

export const ModalContext = createContext<ModalContextType | null>(null);

interface ModalProviderProps {
    children: React.ReactNode;
}

export const ModalProvider:React.FC<ModalProviderProps> = ({children}) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
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