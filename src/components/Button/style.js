import styled from "styled-components";

export const Container = styled.button`
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#212529"};
  color: var(--white);
  border-radius: 4px;
  border: 1px solid transparent;
  width: 95%;
  height: 48px;
  :hover {
    filter: brightness(1.2);
  }
`;
