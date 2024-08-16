import { useContext } from "react";
import useForm from "../../hooks/useForm";
import AuthContext from "../../contexts/authContext";
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

  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center mb-5">
            <h2 className="heading-section">Login</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="login-wrap p-4 p-md-5">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="fa fa-user-o"></span>
              </div>
              <h3 className="text-center mb-4">Have an account?</h3>
              <form onSubmit={onSubmit} className="login-form">
                <div className="form-group">
                  <input
                    type="email"
                    name={LoginFormKeys.Email}
                    value={values[LoginFormKeys.Email]}
                    onChange={onChange}
                    className="form-control rounded-left"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="form-group d-flex">
                  <input
                    type="password"
                    name={LoginFormKeys.Password}
                    value={values[LoginFormKeys.Password]}
                    onChange={onChange}
                    className="form-control rounded-left"
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="form-group d-md-flex">
                  <div className="w-50">
                   
                  </div>
                  <div className="w-50 text-md-right">
                    <Link to="/forgot-password">Forgot Password</Link>
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
