import { useState } from "react";

const Login = () => {
    const [loginCreds, setLoginCreds] = useState({});

    console.log(loginCreds);

    const submitCreds = (event) => {
        event.preventDefault();
        console.log(event);
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={submitCreds}>
                <input type="text" placeholder="username" className="border border-gray-500"/>
                <input type="password" placeholder="password" className="border border-gray-500"/>
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default Login;