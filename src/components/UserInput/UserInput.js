import { useRef, useState } from "react";
import Modal from "../Modal/Modal";

const UserInput = () => {
  const userInputRef = useRef();
  const [clickedInput, setClickedInput] = useState(false);

  const addUserInputHandler = (props) => {
    const userInputEntered = userInputRef.current.value;
    setClickedInput(true);
  };

  return (
    <>
      {clickedInput && <Modal content="This is a content." />}
      <label>Type here what you want to be displayed</label>
      <input type="text" ref={userInputRef} />
      <button onClick={addUserInputHandler}>Submit</button>
    </>
  );
};

export default UserInput;
