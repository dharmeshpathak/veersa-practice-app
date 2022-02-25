const initialState = {notes:[{title:"firsttTTLE",text:"firsttext"},{title:"secondttitle",text:"secondtext"}]} ;

const reducer = (state = initialState,action)=>{
    switch(action.type){
        case "ADD_TASK":{
            
            return{...state, notes:[...state.notes,{title:action.payload.title,text:action.payload.text}]};
        }
        case "DELETE_TASK":{
            console.log(action.payload);
            return{
               ...state,
               notes:[...action.payload]

            }
        }
        default:{
            return state;
        }
    }

}
export default reducer;