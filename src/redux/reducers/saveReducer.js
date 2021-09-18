let initialState={
    loading:null,
    err:null,
    id:""
}

export const  saveReducer=(state=initialState,action)=>{

switch(action.payload){
case "SaveStarted":
    return {...state,loading:true};
case "ErrStarted":
    return {...state,err:action.payload,loading:false};
case "SaveComplete":
    return {...state,id:action.payload,loading:false};
default:
    return state;
}

}