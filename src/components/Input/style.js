import styled, { css } from "styled-components";

export const Container = styled.div`
  text-align: start;
  width: 95%;
  span {
    color: var(--grey1);
  }
`;

export const InputContainer = styled.div`
  background: transparent;
  border-radius: 4px;
  width: 97%;
  padding: 1rem;
  display: flex;
  margin: 8px 0;
  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--negative);
    `}
  input {
    color: var(--grey2);
    border: none;
    background: transparent;
    &::placeholder {
      color: var(--grey1);
    }
  }
`;
