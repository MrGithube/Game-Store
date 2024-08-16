import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import AuthContext from "../../contexts/authContext";
import * as AuthService from "../../services/authService";

export default function Logout(){
const navigate = useNavigate()
const {logoutHandler} = useContext(AuthContext)
    useEffect(()=>{
        AuthService.logout().then(() => logoutHandler()).catch(()=> navigate("/"))

    }, [])  
    return null
}
