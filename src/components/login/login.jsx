import { useContext } from "react";
import useForm from "../../hooks/useForm";
import AuthContext from "../../contexts/aouthContext";
import { Link } from 'react-router-dom';

const LoginFormKeys = {
  Email: "email",
  Password: "password"
};

export default function Login() {
  const { loginSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
    [LoginFormKeys.Email]: "",
    [LoginFormKeys.Password]: ""
  });


return( 
    
)
}




