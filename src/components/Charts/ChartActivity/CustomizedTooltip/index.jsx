import styled from "styled-components";
import colors from "../../../../utils/colors";

const TooltipContainer = styled.div`
  width: 39px;
  height: 63px;
  background-color: ${colors.colorsChart.redChart};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const TooltipItem = styled.p`
  color: #ffffff;
  font-size: 8px;
`;

const CustomTooltip = ({ active, payload }) =>
  active && payload.length ? (
    <TooltipContainer>
      <TooltipItem className="label">{`${payload[0].value}kg`}</TooltipItem>
      <TooltipItem className="desc">{`${payload[1].value}Kcal`}</TooltipItem>
    </TooltipContainer>
  ) : null;

export default CustomTooltip;
