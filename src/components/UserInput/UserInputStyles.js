import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  & input {
    width: 10rem;
    height: 1.5rem;
    border: none;
  }

  & label {
    font-weight: 600;
  }
`;
