// import{Link} from "react";
import React from "react";
import { useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import {useState} from "react";
let Login = () => {
  let user=useSelector((state)=>state.user)
   let history = useHistory();
   let [email,setEmail]=useState("");
   let [password,setPasswod]=useState("");
  return (
    <>
       {user?<Redirect to="/home"/>:""}
          <div className="mt-4 col-4 offset-4">
      <form className="mt-4 ">
  <div class="mb-3">
    <label 
    
    for="exampleInputEmail1" 
    class="form-label">Email address</label>
    <input type="email"
    onChange={(e)=>setEmail(e.currentTarget.value)}
    class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" 
    onChange={(e)=>{setPasswod(e.currentTarget.value)}} 
    class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>


  <div> <button type="submit" 
  class="btn btn-primary mt-4"
    onClick={(e)=>{
      e.preventDefault()
     
    auth.createUserWithEmailAndPassword(email, password)}}  
  >LOGIN</button></div>

  <div> <button type="submit" 
  class="btn btn-primary mt-4"
  onClick={()=>{history.push("/signup")}}
  >SignUp</button></div>

 
</form>
        </div>

       
        
         
    </>
  );
};

export default Login;