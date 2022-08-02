import UserInput from "./components/UserInput/UserInput";
import { Wrapper, GlobalStyle } from "./UI/Wrapper";

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <UserInput />
      </Wrapper>
    </>
  );
}

export default App;
