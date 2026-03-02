import { useState } from "react";
import { useForm } from "react-hook-form";
import {AuthContext} from "../context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";


function Auth() {
  const [mode, setMode] = useState("signup");
  const { signUp, user, login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const { register, handleSubmit, formState: { errors } } = useForm();

function onSubmit(data) {
  setError(null);
    if(mode === "signup") {
      const result = signUp(data.email, data.password);
      if(!result.success) {
        setError(result.message);
      }else {
        navigate("/");
      }
    } 
    else {
      const result = login(data.email, data.password);
      if(!result.success) {
        setError(result.message);
      } else {
        navigate("/");
      }
    }
  }


  return (
    <div className="page">
      <div className="container">
        <div className="auth-container">
          {user && <div className="welcome-message">Welcome, {user.email}!</div>}
          <h1 className="page-title">{mode === 'signup' ? 'Signup' : 'Login'}</h1>
          <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
            {error && <div className="form-error">{error}</div>}
            <div className="form-group">
              <label className="form-label" htmlFor="email" >Email:</label>
              <input className="form-input" type="email" id="email" name="email" {...register("email", { required: "Email is required" })} />
            {errors.email && <span className="form-error">{errors.email.message}</span>}

            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="password">Password:</label>
              <input className="form-input" type="password" id="password" name="password" {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters long" }, maxLength: { value: 100, message: "Password must be less than 100 characters long" } })} />
            {errors.password && <span className="form-error">{errors.password.message}</span>}

            </div>
            <button className="btn btn-primary btn-large">{mode === 'signup' ? 'Signup' : 'Login'}</button>
          </form>
          <div className="auth-switch">
            {mode === 'signup' ? (
              <p>Already have an account? <span className="auth-link" onClick={() => setMode('login')}>Login</span></p>
            ) : (
              <p>Don't have an account? <span className="auth-link" onClick={() => setMode('signup')}>Sign Up</span></p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth