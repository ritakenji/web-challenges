import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({ handleTurnOff, handleTurnOn }) {
  return (
    <StyledQuickActions>
      <Button type="button" onClick={handleTurnOff}>
        Turn all lights off
      </Button>
      <Button type="button" onClick={handleTurnOn}>
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
