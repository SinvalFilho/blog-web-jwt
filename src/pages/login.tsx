import { useAuth } from "../hooks/useAuth"

const Login = () => {
    const {login} = useAuth()
    async function handleLogin(){
        login("abiliocoelho@gmail.com", "secret")
    }

    return (
        <div>
            <h1>Login</h1>
            <button>Entrar</button>
        </div>
    );
}

export default Login;