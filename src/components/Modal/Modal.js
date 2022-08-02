import { StyledModal } from "./ModalStyles";
import { BackdropStyled } from "../../UI/BackdropStyles";
import { Button } from "../Button/ButtonStyles";

const Modal = (props) => {
  return (
    <>
      <BackdropStyled onClick={props.onConfirm} />
      <StyledModal>
        <header>
          <h3>This is a modal</h3>
        </header>
        <p>The text below was sent to the modal.</p>
        <p>"{props.content}"</p>
        <Button onClick={props.onConfirm}>Dismiss</Button>
      </StyledModal>
    </>
  );
};

export default Modal;
