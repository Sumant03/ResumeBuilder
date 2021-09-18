import { useEffect } from 'react';
import {BrowserRouter as Router,Route,Switch } from  "react-router-dom";
import Navbar from './components/navbar';
import Login from "./components/login"
import Home from './components/home';
import SignUp from './components/signup';
import { useDispatch } from 'react-redux';
import {auth,firestore} from "./firebase"
import {userCreator} from  "./redux/actions/userActions"
import PersonalData from "./components/personalData"
import Qualificatons from "./components/qualifications"
import PublicPreview from "./components/publicPreview"
let App=()=>{
let dispatch=useDispatch();

useEffect(()=>{

let unsub=auth.onAuthStateChanged(async (user)=>{

  dispatch(userCreator(user));
  if(user){
    let {uid,email}=user;
    let docRef=firestore.collection("users").doc(uid)
    let doc=await docRef.get();
    if(!doc.exists){
      docRef.set({email})
    }
  }
console.log(user)
})

return()=> unsub();

},[])
  return(
    <div>
     
  <Router>
 <Navbar/>
 
 <Switch>

  <Route path="/publicPreview/:rid">
  <PublicPreview/>
</Route>


 <Route  path="/qualifications">
  <Qualificatons/>

  </Route>

 <Route  path="/personal">
  <PersonalData/>

  </Route>
  <Route  path="/login">
  <Login/>

  </Route>
  <Route  path="/signup">

 <SignUp/>
</Route>
<Route  path="/">
  <Home/>

</Route>

 </Switch>


  </Router>

    </div>
  )
}


export default App;
