let templateReducer=(state=null,action)=>{

 switch(action.type){
     case "SET_Code":
         return action.payload;
     default :
     return state;

 }


}

export default templateReducer;