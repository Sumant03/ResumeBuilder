import {useParams} from "react-router-dom";
import {useEffect,useState} from "react";
import {firestore} from "../firebase";
import "./css/preview.css"


let PublicPreview=()=>{
let abc=useParams();
console.log(abc);
let [previewData,setData]=useState(null);

useEffect(()=>{

firestore.collection("resume").get().then((doc)=>{
    let data=doc.data();
    setData(data);
})


},[])

return(
    
<>
      {previewData ? (
        <>
          <p className={`template-${previewData.code}`}>
            {previewData.val.fname}
          </p>
        </>
      ) : (
        ""
      )}
    </>
)
}

export default PublicPreview;