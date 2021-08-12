import styled from 'styled-components';
import {Button} from 'reactstrap';


    const StyleButton = styled(Button)`
    background-color: #4CAF50;
    width: 50px;
    height: 50px;
    border: none;
    padding: 0;
    border-radius: 50%;
    cursor: pointer;
    text-color: black;
    align-items: center;  
    font-weight-bold; 
    &:hover {
      background-color: #4CAF50;
      color: black;
    }
    &:active {
      background-color: #4CAF50 !important;
      color: black;
  `;
  export default StyleButton;

 