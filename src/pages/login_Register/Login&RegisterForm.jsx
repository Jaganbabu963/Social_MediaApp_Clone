import { useState } from "react";
import "./login.css";
import Register from "./Register";

const Login = (p) => {

  const [isLogin, setLogin] = useState(true);
  const handleLogin = () => {
    setLogin(!isLogin);
  };
  return (
    <>
      <div className="login">
        <div className="loginWrapper">
          <div className="loginLeft">
            <h3 className="appTitle">Connect World</h3>
            <span className="appDesc">
              Life is Short.But Feel and Emotion are Huge.
              <br />
              So Share and Connect
            </span>
          </div>
          <div className="loginRight">
        {    isLogin?
            <>
              <input placeholder="E-mail" type="text" className="writeEmail" />
              <input
                placeholder="PassWord"
                type="text"
                className="writeEmail "
              />
              <button className="loginButton"> Log in</button>
              <span className="noAccount">No Account?</span>
              <button className="loginButton new " onClick={handleLogin}>
                Create New Account
              </button>
            </>
            :<Register fun2 = {handleLogin} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
