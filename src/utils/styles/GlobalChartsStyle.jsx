import { createGlobalStyle } from "styled-components";
import colors from "../colors";

const StyledGlobalChartsStyle = createGlobalStyle`
    .chartContainer {
      background-color:${colors.colorsChart.greyBackground};
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
      border-radius: 5px;
      flex:1;
    }
`;

const GlobalChartsStyle = () => <StyledGlobalChartsStyle />;

export default GlobalChartsStyle;
