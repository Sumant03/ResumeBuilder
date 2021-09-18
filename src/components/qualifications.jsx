import Preview from "./preview";
import "./css/personal.css";
import { useDispatch, useSelector } from "react-redux";
import { detailCreator } from "../redux/actions/detailsCreatore";
import { useHistory } from "react-router"
import {saveResume} from "../redux/actions/saveResume" 

let Qualificatons = () => {
  let details = useSelector((state) => state.details);
//   console.log(details);
 let history=useHistory();
  
  let { degree,college,cgpa,year,isPublic} = details;
  let user=useSelector((state)=>state.user)
  let {uid}=user;
  console.log(uid);
  let code=useSelector((state)=>state.template)
  let  val=useSelector((state)=>state. details)

  let dispatch = useDispatch();
  let {id}=useSelector((state)=>state.save)
  return (
    <>
      <div className="personal-container">
        <div className="personal-form">
          <h2 className="m-4">Proffesional Details</h2>
          <div class="row m-3">
            <div class="col-5">
              <input
                type="text"
                class="form-control"
                placeholder="Degree"
                value={degree}

                onChange={(e) => {
                  dispatch(detailCreator({degree: e.currentTarget.value }));
                }}
              />
            </div>
            <div class="col-5">
              <input
                value={college}
                onChange={(e) => {
                  dispatch(detailCreator({ college: e.currentTarget.value }));
                }}
                type="text"
                class="form-control"
                placeholder="College"
              />
            </div>

            <div class="col-5">
              <input
                value={cgpa}
                onChange={(e) => {
                  dispatch(detailCreator({ cgpa: e.currentTarget.value }));
                }}
                type="number"
                class="form-control"
                placeholder="CGPA"
              />
            </div>
            <div class="col-5">
              <input
                value={year}
                onChange={(e) => {
                  dispatch(detailCreator({ year: e.currentTarget.value }));
                }}
                type="number"
                class="form-control"
                placeholder="Year of grad"
              />
            </div>
             
            <div class="form-check m-4">
              <input
                class="form-check-input"
                type="checkbox"
                checked={isPublic}
                id="flexCheckDefault"
                onClick={(e)=>{
                    dispatch(detailCreator({ isPublic: e.currentTarget.checked }));
                }}
              />
              <label class="form-check-label" for="flexCheckDefault">
                Default checkbox
              </label>
            </div>
            
          </div>

          <button className="btn btn-primary m-4" onClick={()=>{history.push("/personalData")}}>Back</button>
        </div>

        <button className="btn btn-primary qual-gen"
        onClick={()=>{ 
       alert(`localhost:3000/publicPreview/${id}`
          );
          }}
        >Generate link</button>
      <button
  
        className="btn btn-primary qual-save"
        onClick={()=>{  
             dispatch(saveResume(uid,val,code))
    }}
      >
        Save to Database
      </button>

        <Preview />
      </div>
    </>
  );
};

export default Qualificatons;