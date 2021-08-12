import { useState} from 'react';
import ButtonRoundStyled from '../../components/common/button-round-styled';
import { Row, Col} from "reactstrap";
import ModalNuevaTarea from './add-task';
import 'bootstrap/dist/css/bootstrap.css';

const TitlePantalla= () => {  
  const [openModal, setOpenModal] = useState(false);  
  const HandleModal = () => {    
    setOpenModal(true);
  };

  return (  
    <> 
      <Row className="p-3"> 
        <Col>       
          <h1 className="text-center">Administrador de Tareas <ButtonRoundStyled  onClick={HandleModal} /></h1> 
        </Col>       
      </Row> 
      <ModalNuevaTarea
        abrirModal={openModal}
        handlerOpenModal={setOpenModal}
      />
    </>     
  )
}
export default TitlePantalla;