import {useDispatch, useSelector} from "react-redux";
import { auth } from "../firebase";
import {Redirect, useHistory} from "react-router-dom"
import "./css/home.css"
import {templateCreator} from "../redux/actions/templateAction"
let Home =()=>{
  let dispatch=useDispatch();
  let history=useHistory();
    let user = useSelector((state) => state.user);
    return (
      <>
        {user ? "" : <Redirect to="/login" />}
    
        <div className="template-container">
        <div
          onClick={() => {
            dispatch(templateCreator("A"));
            history.push("/personal");
          }}
          className="template"
        >
          <img src="http://localhost:3000/skin1.svg" />
        </div>
        <div
          onClick={() => {
            dispatch(templateCreator("B"));
            history.push("/personal");
          }}
          className="template"
        >
          <img src="http://localhost:3000/skin2.svg" />
        </div>
      </div>
    <button  className=" btn-primary home-logout-btn"onClick={()=>{auth.signOut();}}>Logout</button>
       
      </>
    );
    
}
export default Home;