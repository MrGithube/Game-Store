import { useContext } from "react";
import useForm from "../../hooks/useForm";
import AuthContext from "../../contexts/authContext";
import { Link } from 'react-router-dom';

const RegisterFormKeys = {
  Email: 'email',
  Password: 'password',
  ConfirmPassword: 'confirm-password'
}
export default function Register(){
 
  const { registerSubmitHandler} = useContext(AuthContext)
const {values,onChange, onSubmit} = useForm(registerSubmitHandler, {
  [RegisterFormKeys.Email]: '',
  [RegisterFormKeys.Password]: '',
  [RegisterFormKeys.ConfirmPassword]: '',
})

  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center mb-5">
            <h2 className="heading-section">Register</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="login-wrap p-4 p-md-5">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="fa fa-user-o"></span>
              </div>
              <h3 className="text-center mb-4">Register here!</h3>
              <form onSubmit={onSubmit} className="login-form">
                <div className="form-group">
                  <input
                    type="email"
                    name={RegisterFormKeys.Email}
                    value={values[RegisterFormKeys.Email]}
                    onChange={onChange}
                    className="form-control rounded-left"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="form-group d-flex">
                  <input
                    type="password"
                    name={RegisterFormKeys.Password}
                    value={values[RegisterFormKeys.Password]}
                    onChange={onChange}
                    className="form-control rounded-left"
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="form-group d-flex">
                  <input
                    type="password"
                    name={RegisterFormKeys.ConfirmPassword}
                    value={values[RegisterFormKeys.ConfirmPassword]}
                    onChange={onChange}
                    className="form-control rounded-left"
                    placeholder="Confirm Password"
                    required
                  />
                </div>
                <div className="form-group d-md-flex">
                  <div className="w-50">
                   
                  </div>
                  <div className="w-50 text-md-right">
                    <Link to="/login">Have an account?</Link>
                  </div>
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary rounded submit p-3 px-5">
                    Get Started
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
