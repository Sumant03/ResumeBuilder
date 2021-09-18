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
          <img src="https://in.images.search.yahoo.com/images/view;_ylt=AwrxhZX6rUVhrlwAB4K9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzY0ZGI1YzVkNTY4NGY2MmIzODllNjQ2MGZjMmYyYzFlBGdwb3MDNjQEaXQDYmluZw--?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dresume%2Bsample%2Bin%2Bred%2Bcolour%26type%3DE211IN885G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26nost%3D1%26tab%3Dorganic%26ri%3D64&w=1219&h=1600&imgurl=thumbs.dreamstime.com%2Fz%2Fprofessional-personal-resume-cv-red-white-design-template-vector-eps-183299516.jpg&rurl=https%3A%2F%2Fwww.dreamstime.com%2Fprofessional-personal-resume-cv-red-white-design-template-vector-eps-image183299516&size=198.5KB&p=resume+sample+in+red+colour&oid=64db5c5d5684f62b389e6460fc2f2c1e&fr2=piv-web&fr=mcafee&tt=Professional+Personal+Resume+Cv+In+Red+White+Design+Template+Stock+...&b=61&ni=21&no=64&ts=&tab=organic&sigr=hsfrBumacPBQ&sigb=xIUs770YewHQ&sigi=bFYAT1jXX6ZV&sigt=GdXDw2kWeCE4&.crumb=nTiXpteKWwG&fr=mcafee&fr2=piv-web&type=E211IN885G0" />
        </div>
        <div
          onClick={() => {
            dispatch(templateCreator("B"));
            history.push("/personal");
          }}
          className="template"
        >
          <img src="https://in.images.search.yahoo.com/images/view;_ylt=AwrxhdcqrkVhNGgAYCa9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzAwOGVmNGMyYWI0OTI3OTFkNTY0YTQyODA0YzdlZmU5BGdwb3MDMTAyBGl0A2Jpbmc-?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dresume%2Bsample%2Bin%2Bblue%2Bcolour%26ei%3DUTF-8%26type%3DE211IN885G0%26fr%3Dmcafee%26fr2%3Dsb-top-in.images.search%26nost%3D1%26tab%3Dorganic%26ri%3D102&w=2000&h=2000&imgurl=static.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F696%2F800%2Foriginal%2Fclean-blue-and-white-resume-template-vector.jpg&rurl=https%3A%2F%2Fwww.vecteezy.com%2Fvector-art%2F696800-clean-blue-and-white-resume-template&size=733.4KB&p=resume+sample+in+blue+colour&oid=008ef4c2ab492791d564a42804c7efe9&fr2=sb-top-in.images.search&fr=mcafee&tt=Clean+Blue+and+White+Resume+Template+-+Download+Free+Vectors%2C+Clipart+...&b=61&ni=120&no=102&ts=&tab=organic&sigr=tMqIN6vLlOOx&sigb=a3x.DsCutPV5&sigi=HZ6Fo42ZskX.&sigt=UE6bLFEnoc0Q&.crumb=nTiXpteKWwG&fr=mcafee&fr2=sb-top-in.images.search&type=E211IN885G0" />
        </div>
      </div>
    <button  className=" btn-primary home-logout-btn"onClick={()=>{auth.signOut();}}>Logout</button>
       
      </>
    );
    
}
export default Home;