import styled from "styled-components";

const TooltipContainer = styled.div`
  width: 39px;
  height: 25px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
`;

const TooltipItem = styled.p`
  color: #000000;
  font-size: 8px;
  font-weight: 500;
`;

const CustomSessionTooltip = ({ active, payload }) => {
  return active && payload.length ? (
    <TooltipContainer>
      <TooltipItem>{`${payload[0].value} min`}</TooltipItem>
    </TooltipContainer>
  ) : null;
};

export default CustomSessionTooltip;
