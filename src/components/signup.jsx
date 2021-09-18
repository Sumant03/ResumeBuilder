import { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { auth } from "../firebase";

let SignUp = () => {
  let user=useSelector((state)=>state.user);

 

  let history = useHistory("");
  let [email,setEmail]=useState("");
  let [password,setPasswod]=useState("");
  let [confirmPassword,setConfirmPassword]=useState("");
  return (
    <>
    {user?<Redirect to="/home" />:""}
       <div className="mt-4 col-4 offset-4">
      <form className="mt-4 ">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" 
    class="form-control" 
    id="exampleInputEmail1" 
    aria-describedby="emailHelp"
    value={email}
    onChange={(e)=>setEmail(e.currentTarget.value)}/>
  </div>

  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" 
    class="form-control" 
    id="exampleInputPassword1"
    value={password}
    onChange={(e)=>{setPasswod(e.currentTarget.value)}}/>
  </div>
  
  
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword2" class="form-label">Password</label>
    <input type="password" 
    class="form-control" 
    id="exampleInputPassword2"
    value={confirmPassword}
    onChange={(e)=>{setConfirmPassword(e.currentTarget.value)}}/>
  </div>
  
  <div> <button type="submit" 
  class="btn btn-primary mt-4"
  onClick={(e)=>{
    e.preventDefault()
    if(password===confirmPassword){
      auth.createUserWithEmailAndPassword(email, password);
  }}}
  
  >SignUp</button></div>

<br />
            <br />
            <button
              onClick={() => {
                history.push("/login");
              }}
              class="btn btn-primary"
            >
              Login
            </button>
   

</form>
        </div>
    </>
  );
};

export default SignUp;