
const Register = (props) => {
  return (
    <>
     <input placeholder="UserName" type="text" className="writeEmail butt" />
      <input placeholder="E-mail" type="text" className="writeEmail butt" />
      <input placeholder="PassWord" type="text" className="writeEmail butt" />
      <input placeholder="Re-enter PassWord" type="text" className="writeEmail butt" />
      <button className="loginButton">Sign-Up</button>
      <span onClick={props.fun2} className="back">Go Back</span>
    </>
  );
};

export default Register;
