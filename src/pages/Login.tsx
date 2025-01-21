import useAuth from "../customHooks/useAuth";

const Login = () => {
    const {nameRef, passwordRef, handleLoginInputs, submitCreds} = useAuth();

    return (
        <div className="flex items-center justify-center h-full">
            <div className="border-2 border-slate-300 border-dashed max-w-96 p-6 rounded-lg bg-slate-50 shadow-md">
                <h3 className="font-bold italic bg-gradient-to-br from-slate-500 to-slate-800 text-transparent bg-clip-text text-xl">Login</h3>
                <hr className="border border-slate-400/70 my-3 border-dashed"/>
                <form onSubmit={submitCreds} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                <span className="text-sm font-semibold text-slate-600">Username</span>
                    <input type="text" placeholder="username" name="name" className="text-sm h-9 rounded-md px-4 bg-slate-100 border border-slate-300 focus:border-slate-400 text-slate-800 focus:outline-gray-500" onChange={(event) => handleLoginInputs(event)} ref={nameRef}/>
                </div>
                <div className="flex flex-col gap-1">
        <span className="text-sm font-semibold text-slate-600">Password</span>
                    <input type="password" placeholder="password" name="password" className="text-sm h-9 rounded-md px-4 bg-slate-100 border border-slate-300 focus:border-slate-400 text-slate-800 focus:outline-gray-500"  onChange={(event) => handleLoginInputs(event)} ref={passwordRef}/>
                    <input type="submit" value="Login" className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-br from-slate-500 to-slate-700 text-white/85 hover:text-white border-slate-600 text-sm shadow-lg active:scale-95 transition mt-3 cursor-pointer"/>
        </div>
                </form>
            </div>
        </div>
    )
}

export default Login;