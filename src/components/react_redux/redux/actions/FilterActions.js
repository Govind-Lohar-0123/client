import * as actionType from "../constants";


export const addFilter=(filter)=>(disptach)=>{
    
    disptach({type:actionType.ADD_FILTER,payload:filter});
}
export const removeFilter=(filter)=>(disptach)=>{
    disptach({type:actionType.REMOVE_FILTER,payload:filter})
}
export const clearFilters=()=>(disptach)=>{
    disptach({type:actionType.CLEAR_FILTERS});
}