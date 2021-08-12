import StyleButton from './styled-button';

interface Props {  
  value: string;
  onClick: any;  
  disabled?:boolean;

}
const ButtonRoundStyled: React.FC<Props> = (props) => {
  return (
    <StyleButton
      {...props}     
      value={props.value? props.value: ''}
      onClick={props.onClick}
      disabled={props.disabled}
    >+</StyleButton>
  );
};
export default ButtonRoundStyled;

