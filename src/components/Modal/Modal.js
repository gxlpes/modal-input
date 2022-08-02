import { StyledModal } from "./ModalStyles";
import { BackdropStyled } from "./BackdropStyles";

const Modal = (props) => {
  return (
    <>
      <BackdropStyled />
      <StyledModal>
        <header>
          <h3>This is a modal</h3>
        </header>
        <p>This is the text that was send:</p>
        <p>{props.content}</p>
      </StyledModal>
    </>
  );
};

export default Modal;
