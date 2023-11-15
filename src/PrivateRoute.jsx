
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const PraivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const locatiion = useLocation()
    // console.log(locatiion.pathname)
    if(loading){
        return <span className="loading loading-spinner loading-lg justify-center my-72 ml-[700px]"></span>
    }
    if(user) {
        return children;
    }
    return <Navigate state={{from:locatiion}} to="/login" replace></Navigate>

};

export default PraivateRoute;