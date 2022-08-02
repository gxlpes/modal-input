import Container from "./Container";

const Modal = (props) => {
  return (
    <Container>
      <header>
        <h3>This is a modal</h3>
      </header>
      <p>This is the text that was send:</p>
      <p>{props.content}</p>
    </Container>
  );
};

export default Modal;
