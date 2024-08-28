import {createContext, useState, useEffect, PropsWithChildren} from "react"
import { api } from "../hooks/useAuth"

type User = {
    id: string;
    name: string;
    email: string;
    token: string;
}

type AuthContextProps = {
    user: User|null
    login: (email: string, password: string) => Promise<void>
    logout: () => void
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

export const AuthProvider = ({children}: PropsWithChildren) => {
    const [user, setUser] = useState<User|null>(null)

    async function login(email: string, password: string){
        const response = await api.post("Login", {
            email,
            password
        })
    }
    async function logout() {}
    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}