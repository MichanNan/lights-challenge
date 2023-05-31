import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({ onTurnOnAll, onTurnOffAll }) {
  return (
    <StyledQuickActions>
      <Button type="button" onClick={onTurnOffAll}>
        Turn all lights off
      </Button>
      <Button type="button" onClick={onTurnOnAll}>
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
