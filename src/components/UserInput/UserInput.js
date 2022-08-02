import { useRef, useState } from "react";
import Modal from "../Modal/Modal";
import { Card } from "../../UI/CardStyles";
import { StyledForm } from "./UserInputStyles";
import { Button } from "../Button/ButtonStyles";

const UserInput = (props) => {
  const userInputRef = useRef();
  const [clickedInput, setClickedInput] = useState(false);

  const addUserInputHandler = (event) => {
    event.preventDefault();
    const userInputEntered = userInputRef.current.value;

    if (userInputEntered.trim().length === 0) {
      return;
    }

    setClickedInput(userInputEntered);
    props.onUserInput(userInputEntered);
  };

  const modalHandler = () => {
    setClickedInput(null);
    userInputRef.current.value = " ";
  };

  return (
    <>
      <Card>
        {clickedInput && <Modal content={clickedInput} onConfirm={modalHandler} />}
        <StyledForm onSubmit={addUserInputHandler}>
          <label>Type here what you want to be displayed</label>
          <input type="text" ref={userInputRef} />
          <Button type="submit">Submit</Button>
        </StyledForm>
      </Card>
    </>
  );
};

export default UserInput;
