import styled, { css } from "styled-components";

export default function BoxWithStyledComponents({ isBlack }) {
  return <Box $black={isBlack}></Box>;
}

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: green;
  margin: 2rem;

  &:hover {
    background-color: red;
  }

  ${(props) =>
    props.$black &&
    css`
      background-color: black;
    `};
`;
