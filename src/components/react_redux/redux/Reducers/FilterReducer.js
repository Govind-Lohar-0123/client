import * as actionType from "../constants"; 






export const filterReducer=(state=[],actions)=>{
 
   let idx;
    switch(actions.type){
        case actionType.ADD_FILTER :
             idx=state.indexOf(actions.payload);
         
            if(idx!=-1)state.splice(idx, 1);
            else state.push(actions.payload);
            return state;
        case actionType.REMOVE_FILTER:
             idx=state.indexOf(actions.payload);
             if(idx!=-1)state.splice(idx, 1);
             return state;
          
        case actionType.CLEAR_CART:
            return [];
        default :
            return state;  
    }
}
export default filterReducer;