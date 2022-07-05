import PropTypes from "prop-types";
import styled from "styled-components";
import { PieChart, Pie, ResponsiveContainer, Cell, Label } from "recharts";
import colors from "../../../utils/colors";
import "../../../utils/styles/ChartScoreStyle.css";

const ChartContainer = styled.div`
  display: flex;
  min-width: 210px;
  height: 263px;
  box-sizing: border-box;
  position: relative;
`;

const Title = styled.h3`
  margin: 0;
  position: absolute;
  top: 28px;
  left: 34px;
  font-weight: 600;
  font-size: 16px;
  color: #20253a;
`;

const BackgroundLabel = styled.div`
  height: 177px;
  width: 177px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  right: calc(50% - 88px);
  top: 43px;
`;

const ChartScore = ({ score }) => {
  const scoresData = [
    { name: "score", value: score, color: colors.colorsChart.redChart },
    {
      name: "no-score",
      value: 1 - score,
      color: colors.colorsChart.greyBackground,
    },
  ];

  return (
    scoresData && (
      <ChartContainer className="chartContainer">
        <Title>Score</Title>
        <BackgroundLabel></BackgroundLabel>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              dataKey="value"
              data={scoresData}
              innerRadius={"70%"}
              outerRadius={"80%"}
              startAngle={90}
              endAngle={450}
            >
              {scoresData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  stroke={entry.color}
                  cornerRadius="50%"
                  width={400}
                />
              ))}

              <Label
                fill="#282D30"
                value={`${100 * scoresData[0].value}%`}
                position="centerBottom"
                className="label-top score-label-black"
                scaleToFit={false}
              />
              <Label
                fill="#74798C"
                value={`de votre`}
                position="centerTop"
                className="label-middle score-label-grey"
              />
              <Label
                fill="#74798C"
                value={`objectif`}
                position="centerTop"
                className="label-end score-label-grey"
              />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </ChartContainer>
    )
  );
};

export default ChartScore;

ChartScore.propTypes = {
  score: PropTypes.number,
};
