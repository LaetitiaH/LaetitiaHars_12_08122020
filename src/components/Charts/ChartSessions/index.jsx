import styled from "styled-components";
import colors from "../../../utils/colors";
import PropTypes from "prop-types";
import { useUserSessionsInformation } from "../../../utils/services";
import Loader from "../../Loader";
import Error from "../../Error";
import {
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  LineChart,
} from "recharts";
import CustomSessionTooltip from "./CustomizedSessionsTooltip";
import { useState } from "react";

const ChartContainer = styled.div`
  display: flex;
  min-width: 210px;
  height: 263px;
  box-sizing: border-box;
  background-color: ${colors.colorsChart.redChart} !important;
  position: relative;
`;

const ChartContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${colors.colorsChart.greyBackground}; ;
`;

const Title = styled.h3`
  margin: 0;
  position: absolute;
  top: 28px;
  left: 34px;
  font-weight: 500;
  font-size: 15px;
  color: #ffffff;
  opacity: 0.5;
  width: 147px;
  line-height: 24px;
`;

const ChartSession = ({ userId }) => {
  const {
    data: userSessions,
    isLoading,
    hasError,
  } = useUserSessionsInformation(userId);

  const [lineColor, setLineColor] = useState("0.6");

  /**
   * On hover into the chart, change color line
   * @function onMouseMove
   * @param  {object} hoveredData data over which the user has hovered the mouse
   *
   * @return void
   * @author Laetitia Hars
   * @version 1.0
   */
  const onMouseMove = (hoveredData) => {
    if (hoveredData?.activePayload) {
      setLineColor("1");
    }
  };

  /**
   * If no-hover into the chart, change color line to initial state
   * @function onMouseOut
   * @return void
   * @author Laetitia Hars
   * @version 1.0
   */
  const onMouseOut = () => setLineColor("0.6");

  return (
    <ChartContainer className="chartContainer">
      <Title>Durée moyenne des sessions</Title>
      {isLoading && (
        <ChartContent>
          <Loader className="chartContent" />
        </ChartContent>
      )}
      {hasError && (
        <ChartContent>
          <Error className="chartContent" />
        </ChartContent>
      )}

      <ResponsiveContainer width={"99%"}>
        <LineChart
          onMouseMove={onMouseMove}
          onMouseOut={onMouseOut}
          data={userSessions.sessions}
          margin={{ top: 0, right: 12, bottom: 12, left: 12 }}
        >
          <XAxis
            dataKey={({ day }) => getDay(day)}
            axisLine={false}
            tickLine={false}
            tick={{ fill: "rgba(255, 255, 255, 0.6)", fontSize: 12 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            hide={true}
            domain={["dataMin - 6", "dataMax + 20"]}
          />
          <Tooltip
            cursor={{
              stroke: "#000000",
              strokeWidth: 70,
              opacity: 0.1,
            }}
            content={CustomSessionTooltip}
          />
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke={"rgb(255, 255, 255)"}
            opacity={lineColor}
            strokeWidth={2}
            dot={false}
            activeDot={{
              stroke: "rgba(255, 255, 255, 1)",
              r: 5,
              strokeWidth: 2,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

/**
 * Convert day in first day letter
 * @function getDay
 * @param  {number} day Day in format D
 *
 * @return {string}
 * @author Laetitia Hars
 * @version 1.0
 */

const getDay = (day) => {
  const dayConverter = {
    1: "L",
    2: "M",
    3: "M",
    4: "J",
    5: "V",
    6: "S",
    7: "D",
  };
  return dayConverter[day];
};

export default ChartSession;

ChartSession.propTypes = {
  userId: PropTypes.number,
};
