 import Home from "./pages/homepage/home";
import Login from "./pages/login_Register/Login&RegisterForm";
import Profile from "./pages/profilePage/Profile";
import { useState } from "react";

function App() {
  const [prof,setProf] = useState(false);
  const handleClick1=()=>{
    setProf(!prof)
  }
  return (
    <>
   <Login />
    {prof?<Profile fun = {handleClick1}/>:<Home fun = {handleClick1} />}
    </>
  );
}

export default App;
