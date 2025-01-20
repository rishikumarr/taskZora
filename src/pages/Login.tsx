import useAuth from "../customHooks/useAuth";

const Login = () => {
    const {error, nameRef, passwordRef, handleLoginInputs, submitCreds} = useAuth();
    const {type, msg} = error;

    return (
        <div>
            <h1>Login</h1>
            {type && <p>{msg}</p>}
            <form onSubmit={submitCreds}>
                <input type="text" placeholder="username" name="name" className="border border-gray-500" onChange={(event) => handleLoginInputs(event)} ref={nameRef}/>
                <input type="password" placeholder="password" name="password" className="border border-gray-500"  onChange={(event) => handleLoginInputs(event)} ref={passwordRef}/>
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default Login;