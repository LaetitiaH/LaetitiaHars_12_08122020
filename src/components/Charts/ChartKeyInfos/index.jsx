import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "../../../utils/colors";

const ChartContainer = styled.div`
  display: flex;
  min-width: 258px;
  min-height: 124px;
  max-height: 150px;
  box-sizing: border-box;
  padding: 32px;
  column-gap: 24px;
  flex: 1;
  align-items: center;
`;

const LogoContainer = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 6px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 21px;
  box-sizing: border-box;
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2px;
  justify-content: center;
`;

const Text = styled.div`
  color: ${colors.colorsChart.blackChart};
  font-size: 20px;
  font-weight: 700;
`;

const Unit = styled.div`
  color: ${colors.colorsChart.greyLegend};
  font-size: 15px;
  font-weight: 500;
`;

const ChartKeyInfos = ({ keyData }) => (
  <ChartContainer className="chartContainer">
    <LogoContainer backgroundColor={keyData.color}>
      <Logo src={keyData.logo} />
    </LogoContainer>
    <InfoContainer>
      <Text>{keyData.value}</Text>
      <Unit>{keyData.name}</Unit>
    </InfoContainer>
  </ChartContainer>
);

export default ChartKeyInfos;

ChartKeyInfos.propTypes = {
  keyData: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string,
    logo: PropTypes.string,
    color: PropTypes.string,
  }),
};
