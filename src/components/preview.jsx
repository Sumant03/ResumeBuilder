import { useSelector } from "react-redux";
import "./css/preview.css";

let Preview = () => {
   
  
   let user=useSelector((state)=>state. details);
   let templateCode = useSelector((state) => state.template);
  //  console.log(templateCode);
   let { fname, lname, email, phone, city, state,college,degree,cgpa,year }=user;
  return <div>
        <div className="preview-container">

        <p className={`template-${templateCode}`}>{fname}</p>
        <p className={`template-${templateCode}`}>{lname}</p>
        <p className={`template-${templateCode}`}>{email}</p>
        <p className={`template-${templateCode}`}>{phone}</p>
        <p className={`template-${templateCode}`}>{city}</p>
        <p className={`template-${templateCode}`}>{state}</p>
        <p className={`template-${templateCode}`}>{college}</p>
        <p className={`template-${templateCode}`}>{degree}</p>
        <p className={`template-${templateCode}`}>{cgpa}</p>
        <p className={`template-${templateCode}`}>{year}</p>
        </div>
  </div>
};

export default Preview;