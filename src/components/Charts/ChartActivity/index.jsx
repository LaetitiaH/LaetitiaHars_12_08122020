import { useUserActivityInformation } from "../../../utils/services";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  Bar,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  BarChart,
} from "recharts";
import colors from "../../../utils/colors";
import Loader from "../../Loader";
import Error from "../../Error";
import CustomTooltip from "./CustomizedTooltip";

const ChartContainer = styled.div`
  height: 320px;
  position: relative;
  padding: 17px 26px 23px 32px;
  box-sizing: border-box;
  flex: 1;
`;

const Title = styled.h3`
  margin: 0;
  position: absolute;
  top: 28px;
  left: 50px;
  font-size: 15px;
  color: #20253a;
`;

const ChartContent = styled.div`
  margin-top: 65px;
`;

const ChartActivity = ({ userId }) => {
  const {
    data: userActivity,
    isLoading,
    hasError,
  } = useUserActivityInformation(userId);

  const legendData = [
    {
      value: "Poids (kg)",
      type: "circle",
      id: "kg",
      color: `${colors.colorsChart.blackChart}`,
    },
    {
      value: "Calories brûlées (kCal)",
      type: "circle",
      id: "cl",
      color: `${colors.colorsChart.redChart}`,
    },
  ];

  return (
    <ChartContainer className="chartContainer">
      <Title>Activité quotidienne</Title>

      {isLoading && (
        <ChartContent>
          <Loader className="chartContent"></Loader>
        </ChartContent>
      )}
      {hasError && (
        <ChartContent>
          <Error className="chartContent"></Error>
        </ChartContent>
      )}
      <ResponsiveContainer width={"99%"} height={280}>
        <BarChart data={userActivity.sessions} barGap={8}>
          <CartesianGrid strokeDasharray="2 3" vertical={false} />
          <XAxis
            axisLine={{ stroke: `${colors.colorsChart.grey}` }}
            tickLine={false}
            dataKey={({ day }) => getDayLabel(day)}
            dy={16}
            tick={{ fill: `${colors.colorsChart.greyLabel}`, fontSize: 14 }}
          />
          <YAxis
            yAxisId="kg"
            type="number"
            dataKey="kilogram"
            domain={["dataMin - 1", "dataMax + 2"]}
            orientation={"right"}
            axisLine={false}
            tickLine={false}
            dx={40}
            tick={{ fill: `${colors.colorsChart.greyLabel}`, fontSize: 14 }}
          />
          <YAxis
            yAxisId="cl"
            type="number"
            dataKey="calories"
            domain={[0, "dataMax + 60"]}
            hide={true}
          />
          <Tooltip
            cursor={{ fill: `${colors.colorsChart.greyTooltip}` }}
            content={CustomTooltip}
          />
          <Legend
            verticalAlign="top"
            align={"right"}
            iconSize={8}
            wrapperStyle={{ paddingBottom: 40, marginRight: "-50px" }}
            formatter={(value) => getLegendFormat(value)}
            payload={legendData}
          />
          <Bar
            radius={[50, 50, 0, 0]}
            yAxisId={"kg"}
            barSize={7}
            dataKey="kilogram"
            fill={`${colors.colorsChart.blackChart}`}
          />
          <Bar
            radius={[50, 50, 0, 0]}
            yAxisId={"cl"}
            barSize={7}
            dataKey="calories"
            fill={`${colors.colorsChart.redChart}`}
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

/**
 * Convert date in YYYY-MM-DD format (string) to day (number)
 * @function getDayLabel
 * @param {string} date date in YYYY-MM-DD format
 *
 * @return {number}
 * @author Laetitia Hars
 * @version 1.0
 */
const getDayLabel = (date) => +date.split("-")[2];

/**
 * Return html code to display legend
 * @function getLegendFormat
 * @param {string} value Title of each element
 *
 * @return html element with style
 * @author Laetitia Hars
 * @version 1.0
 */

const getLegendFormat = (value) => (
  <span
    style={{
      marginRight: 32,
      marginLeft: 10,
      color: `${colors.colorsChart.greyLegend}`,
      fontSize: 14,
    }}
  >
    {value}
  </span>
);

export default ChartActivity;

ChartActivity.propTypes = {
  userId: PropTypes.number,
};
