import { StyledModal } from "./ModalStyles";
import { BackdropStyled } from "../../UI/BackdropStyles";
import { Button } from "../Button/ButtonStyles";
import ReactDOM from "react-dom";

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <BackdropStyled onClick={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      <StyledModal>
        <header>
          <h3>User Input Modal</h3>
        </header>
        <p>The text below was sent to the modal</p>
        <p>
          <b>{props.content}</b>
        </p>
        <Button onClick={props.onConfirm}>Dismiss</Button>
      </StyledModal>
    </>
  );
};

export default Modal;
