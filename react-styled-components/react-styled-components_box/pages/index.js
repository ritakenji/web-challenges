import BoxWithStyledComponents from "@/components/BoxWithStyledComponents.js";
import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import styled from "styled-components";

export default function HomePage() {
  return (
    <BoxWrapper>
      <BoxWithClassName />
      <BoxWithClassName isBlack />

      <BoxWithStyledComponents />
      <BoxWithStyledComponents isBlack />
    </BoxWrapper>
  );
}

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
