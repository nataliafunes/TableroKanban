import {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Input, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from 'reactstrap';
import { addTasks } from '../../redux/Adm-tareas/action.ts';
import {TituloTexto} from '../../components/common/titulo';

const ModalNuevaTarea = ({
  abrirModal,
  handlerOpenModal,  
}) => {
  const [descripcion, setDescripcion] = useState();
  const dispatch = useDispatch();

  const {
    dataFiltered
  } = useSelector((state) => state.admTareasReducer);

  const handleClose = () => {   
    handlerOpenModal(false);
    setDescripcion('');
  };

  const handleAgregar = () =>{    
      dispatch(addTasks({text: descripcion, estado: "Sin Realizar", order:dataFiltered.length}));
      handleClose(); 
  };
  
  const handleValue = (e) =>{
    setDescripcion(e.target.value);
  };

  return (
   <Modal isOpen={abrirModal}> 
      <ModalHeader>
        <TituloTexto>Tarea Nueva</TituloTexto>
      </ModalHeader>
      <ModalBody>
        <Row>       
          <Col>           
            <Input className="p-1"
              maxLength="25"
              name="descripcion"
              value={descripcion}
              onChange={(e) =>    
                handleValue(e)
              }             
            />
          </Col>
        </Row>
      </ModalBody>
      <ModalFooter>
        <Row>
          <Col className="text-center">
            <Button onClick={handleAgregar} disabled={!descripcion}>
              Aceptar
            </Button>
          </Col>
          <Col>
            <Button onClick={handleClose}>
              Cancelar
            </Button>
          </Col>        
        </Row>
      </ModalFooter>
    </Modal>
  );
};

export default ModalNuevaTarea;

