import { Navigate, Outlet } from "react-router-dom";

const Auth = () => {
    const localStorageToken = localStorage.getItem('token');

    return localStorageToken ? (<Outlet />) : (<Navigate to='/' replace />)
}

export default Auth