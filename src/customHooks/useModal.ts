import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";
import { ModalContextType } from "../context/ModalContext";

const useModal = ():ModalContextType => {
    const context = useContext(ModalContext);

    if(!context){
        throw new Error("Error in useModal");
    }

    return context;
}

export default useModal;