import { useHistory } from "react-router-dom";

let Navbar = () => {
  let history=useHistory();
    return (
      <>
        <nav class="navbar navbar-dark bg-dark">
          <div class="container-fluid" onClick={()=>{history.push("/home")}}>
            <a class="navbar-brand" href="#">
              Resume Builder
            </a>
          </div>
        </nav>
      </>
    );
  };
  
  export default Navbar;