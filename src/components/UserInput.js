import { useRef } from "react";

const UserInput = () => {
  const userInputRef = useRef();

  const addUserInputHandler = (props) => {
    const userInputEntered = userInputRef.current.value;
    console.log(userInputEntered);
  };

  return (
    <>
      <label>Type here what you want to be displayed</label>
      <input type="text" ref={userInputRef} />
      <button onClick={addUserInputHandler}>Submit</button>
    </>
  );
};

export default UserInput;
