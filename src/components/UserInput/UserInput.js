import { useRef, useState } from "react";
import Modal from "../Modal/Modal";

const UserInput = (props) => {
  const userInputRef = useRef();
  const [clickedInput, setClickedInput] = useState(false);

  const addUserInputHandler = (event) => {
    event.preventDefault();
    const userInputEntered = userInputRef.current.value;
    setClickedInput(userInputEntered);

    props.onUserInput(userInputEntered);
  };
  return (
    <>
      {clickedInput && <Modal content={clickedInput} />}
      <form onSubmit={addUserInputHandler}>
        <label>Type here what you want to be displayed</label>
        <input type="text" ref={userInputRef} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default UserInput;
