import { createContext } from "react";
import { useNavigate } from 'react-router-dom';

import usePersistedState from "../hooks/usePersistedState";
import {login} from '../services/authService'
import {register} from '../services/authService'

const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState('auth', {});

    const loginSubmitHandler= async (values) => {
   
        const result = await login(values.email,values.password)
     
        
        localStorage.setItem("accessToken", result.accessToken)
     
        setAuth(result)
     
        navigate("/")
       }
     
     
       const registerSubmitHandler= async (values) => {
        
         const result = await register(values.email,values.password)
     
         localStorage.setItem("accessToken", result.accessToken)
      
         setAuth(result)
     
      
         navigate("/")
        }
     
        const logoutHandler = () => {
         setAuth({})
         localStorage.removeItem("accessToken")
         navigate("/")
        }
     
       const values = {
         loginSubmitHandler,
         registerSubmitHandler,
         logoutHandler,
         email:auth.email,
         userId: auth._id,
         username:auth.username || auth.email,
         isAuthenticated: !!auth.email
       }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

AuthContext.displayName = 'AuthContext';

export default AuthContext;
