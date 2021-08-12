import {
    GET_TASKS,
    SET_TASKS,
    ADD_TASKS,
    REORDER,  
    
  } from '../actions';
  
  export const getTasks = () => {
    return {
      type: GET_TASKS,
    };
  };
  
  export const setTasks = (payload: any) => {
    return {
      type: SET_TASKS,
      payload,
    };
  };
  
  export const addTasks = (payload: any) => {  
    return {
      type: ADD_TASKS,
      payload,
    };
  };

  export const reOrder = (source: any, destination:any, draggableId:any) => {
    return { 
      type: REORDER,
      payload : {source, destination, draggableId}
    };
  };  

   
 
 