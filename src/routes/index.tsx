import {Route, Navigate, Routes as Switch} from "react-router-dom"
import Login from "../pages/login"
import Register from "../pages/register"
import Dashboard from "../pages/dashboard"

const Routes = () => {

    const auth = true
    return (
        <Switch>
            <Route path="/" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/dashboard" element={auth ? <Dashboard/> : <Navigate to="/" replace />}/>
        </Switch>
    ) 
}


export default Routes