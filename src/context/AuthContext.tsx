import { useState, useRef, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface LoginCredsType{
    name: string;
    password: string;
}

interface AuthProviderProps {
    children: React.ReactNode
}

export interface AuthContextType{
    isLoggedIn: boolean;
    loginCreds: LoginCredsType;
    nameRef: React.RefObject<HTMLInputElement>;
    passwordRef: React.RefObject<HTMLInputElement>;
    error: {type: boolean, msg: string};
    handleLoginInputs: (event: React.ChangeEvent<HTMLInputElement>) => void;
    submitCreds: (event: React.FormEvent<HTMLFormElement>) => void;
    logOut: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider:React.FC<AuthProviderProps> = ({children}) => {
    // State holds the user log status
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    // state holds login credentials
    const [loginCreds, setLoginCreds] = useState<LoginCredsType>({name: '', password: ''});

    // Reference that refers to the username field
    const nameRef = useRef<HTMLInputElement>(null);

    // Reference that refers to the password field
    const passwordRef = useRef<HTMLInputElement>(null);

    // State holds the error status
    const [error, setError] = useState<{type: boolean; msg: string}>({type: false, msg: ""});

    const navigate = useNavigate();
    
    // Function responsible for handling inputs in login page
    const handleLoginInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
        setError({type: false, msg: ''});

        const { name, value } = event.target;

        // Updating the credentials based on the name passed via event
        setLoginCreds((prevState) => ({...prevState, [name]: value}));
    }

    // Function responsible for logging in the user
    const submitCreds = async (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { name, password } = loginCreds;

        if(name == ""){
            setIsLoggedIn(false);
            setError({type: true, msg: "Username can't be empty"});
            // Focusing on the username input field
            nameRef.current?.focus();
            return;
        }

        if(password == ""){
            setIsLoggedIn(false);
            setError({type: true, msg: "Password can't be empty"});
            // Focusing on the password input field
            passwordRef.current?.focus();
            return;
        }

        // If both name and password is not empty
        if(name !== "" && password !== ""){
            // Fetching the auth, there is only one admin in auth that why
            const response =  await fetch('http://localhost:3000/auth');
            // const data = await response.json();

            setError({type: !response.ok, msg: response.ok ? "Success" : "Something went wrong"});
            setIsLoggedIn(response.ok);
        }        
    }

    // Function responsible for logging out the user
    const logOut = () => {
        setIsLoggedIn(false);
        setLoginCreds({name: '', password: ''});
    }

    const values = {
        isLoggedIn, loginCreds, nameRef, passwordRef, error, handleLoginInputs, submitCreds, logOut
    }

    useEffect(()=>{
        if(isLoggedIn){
            navigate('/list/tasks');
        }
        else{
            navigate('/login')
        }
    }, [isLoggedIn, navigate]);

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}
