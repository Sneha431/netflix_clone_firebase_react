import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
import { login, signup } from "../../firebase";

const Login = () => {
  const [signState, setsignState] = useState("Sign In");
  const[name,setname]=useState();
    const [email, setemail] = useState();
      const [password, setpassword] = useState();

      const user_auth = async(e)=>{
        console.log(signState);
        e.preventDefault();
        if(signState === "Sign In")
        {
          console.log("login");
          await login(email,password);
        }
      else{
          await signup(name, email, password);
      }
      }
  return (
    <div className="login">
      <img src={logo} alt="" srcSet="" className="login-logo" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState == "Sign Up" && (
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          )}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <button onClick={user_auth}>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState == "Sign In" ? (
            <p>
              New to netflix ?{" "}
              <span onClick={() => setsignState("Sign Up")}>Sign Up Now</span>
            </p>
          ) : (
            <p>
              Already have account ?{" "}
              <span onClick={() => setsignState("Sign In")}>Sign In Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
