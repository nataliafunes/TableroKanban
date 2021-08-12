import {
    SET_TASKS,
    ADD_TASKS,
    REORDER,   
  } from '../actions';
  
  const INIT_STATE = {
    data: [],
    dataFiltered:[],
    dataEstados:[],
  }; 
  
  const Estados:  any = (data:any) => {  
    let hash:any = {};
    const dataFiltrada = data.map((item:any)=>  { return ({descripcion:item.estado })}); 
    const dataEstado = dataFiltrada.filter((o:any) => hash[o.descripcion] ? false : hash[o.descripcion] = true);
    return dataEstado;  
  };
    
  const changeEstado = (index:any, dataFiltrada:any, estado:any)=>{
      const {text} = index;      
      dataFiltrada.map(function(item:any){
        if(item.text === text){         
          item.estado = estado;
        }           
      });
      return dataFiltrada;
  };

  const OrderData = (list:any, startIndex:any, endIndex:any) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const ReOrdenar = ( source : any, destination:any, draggableId:any,  dataFiltrada:any) => { 
    let dataOrder = [...dataFiltrada];
    const itemRemove = dataFiltrada.filter((i:any) =>i.text ===draggableId);   
    changeEstado(itemRemove[0], dataOrder, destination.droppableId); 
    OrderData(dataOrder, source.index, destination.index);
    return  dataOrder;   
  };

  export default (state = INIT_STATE, action: any) => {
    switch (action.type) {      
      case SET_TASKS:            
        return { ...state, data:  action.payload, dataFiltered: action.payload, dataEstados: Estados(action.payload)};
      case ADD_TASKS:   
        return {  ...state,
          dataFiltered: [...state.dataFiltered, action.payload]
      } 
     case REORDER:       
        const {source, destination , draggableId} = action.payload;       
        const data = state.dataFiltered;
        return { ...state,  dataFiltered: ReOrdenar(source, destination, draggableId, data)};      
      default:
        return { ...state };
    }
 };
  
