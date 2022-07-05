import PropTypes from "prop-types";
import { useUserPerformance } from "../../../utils/services";
import styled from "styled-components";
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  ResponsiveContainer,
  RadarChart,
} from "recharts";
import Loader from "../../Loader";
import Error from "../../Error";

const ChartContainer = styled.div`
  display: flex;
  min-width: 210px;
  height: 263px;
  box-sizing: border-box;
  background-color: #282d30 !important;
`;

const ChartContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const ChartRadarActivity = ({ userId }) => {
  const {
    data: userPerformance,
    isLoading,
    hasError,
  } = useUserPerformance(userId);
  let userPerformanceFormatted = [];

  const ACTIVITY_ORDER = [
    { id: 6, value: "Intensité" },
    { id: 5, value: "Vitesse" },
    { id: 4, value: "Force" },
    { id: 3, value: "Endurance" },
    { id: 2, value: "Energie" },
    { id: 1, value: "Cardio" },
  ];

  if (userPerformance.data !== undefined) {
    userPerformanceFormatted = ACTIVITY_ORDER.reduce((acc, activity) => {
      const value = userPerformance?.data.find(
        (value) => value.kind === activity.id
      )?.value;

      return [...acc, { value: value, kind: activity.value }];
    }, []);
  }
  return (
    <ChartContainer className="chartContainer">
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

      {!isLoading && !hasError && userPerformanceFormatted.length && (
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart outerRadius="75%" data={userPerformanceFormatted}>
            <PolarGrid radialLines={false} />
            <PolarAngleAxis
              stroke="white"
              dy={3}
              dataKey="kind"
              tickLine={false}
              tick={{
                fontSize: 12,
                fontWeight: 500,
              }}
            />

            <Radar
              dataKey="value"
              stroke="rgba(255, 1, 1, 0.7)"
              fill="rgba(255, 1, 1, 0.7)"
            />
          </RadarChart>
        </ResponsiveContainer>
      )}
    </ChartContainer>
  );
};

export default ChartRadarActivity;

ChartRadarActivity.propTypes = {
  userId: PropTypes.number,
};
