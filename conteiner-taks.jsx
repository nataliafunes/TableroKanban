import { useEffect } from "react";
import {useSelector, useDispatch } from 'react-redux';
import { Row, Col} from 'reactstrap';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { getTasks, reOrder} from '../../redux/Adm-tareas/action.ts';

const ConteinerTasks= () => {
  const dispatch = useDispatch(); 
  const {
    dataFiltered: tareas,
    dataEstados : estados 
  } = useSelector((state) => state.admTareasReducer);

  const handleOnDragEnd = (result) => {    
    const { source, destination, draggableId } = result;
    if (!destination) {
      return;
    }                                
    if ( source.index === destination.index && source.droppableId === destination.droppableId) {
      return;
    }    
    dispatch(reOrder( source, destination, draggableId));
  } 

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]); 

  return (
    <>
      <Row className="p-3">        
        <DragDropContext onDragEnd = {handleOnDragEnd} >
          {estados.map((item, index) => {               
            const {descripcion} = item ||{};   
            return (                
              <Col className="p-2">                 
                <h1>{descripcion}</h1>
                <Droppable index ={index} droppableId={descripcion} className="task-container">
                    {(droppableProvided) => (
                      <ul
                        {...droppableProvided.droppableProps}
                        ref={droppableProvided.innerRef}
                        className="task-container"
                      >            
                        {tareas.filter(s => s.estado === descripcion).map((item2, index2) => {
                          const {text} = item2 ||{};   
                          return( 
                            <Draggable key={text} draggableId={text} index={index2} className="align-center">
                              {(draggableProvided) => (
                                <>
                                  <li
                                    {...draggableProvided.draggableProps}
                                      ref={draggableProvided.innerRef}
                                    {...draggableProvided.dragHandleProps
                                    }
                                      className={"task-item-"+(descripcion==="Sin Realizar"?"todo":
                                      (descripcion==="En Proceso"?"doing":"done"))                                      
                                    }
                                  >  
                                    {text}
                                  </li> 
                                 </>   
                              )}            
                            </Draggable>                             
                          )                
                        })}
                        {droppableProvided.placeholder}
                      </ul>
                    )}
                </Droppable>
              </Col>
            )
          })}
        </DragDropContext>      
      </Row>
    </>
  )
}
export default ConteinerTasks;







