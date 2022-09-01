import styled from "styled-components";
import ChartActivity from "./ChartActivity";
import PropTypes from "prop-types";
import GlobalChartsStyle from "../../utils/styles/GlobalChartsStyle";
import ChartKeyInfos from "./ChartKeyInfos";
import energy from "../../assets/energy.png";
import chicken from "../../assets/chicken.png";
import apple from "../../assets/apple.png";
import cheeseburger from "../../assets/cheeseburger.png";
import React from "react";
import ChartSession from "./ChartSessions";
import ChartRadarActivity from "./ChartRadarActivity";
import ChartScore from "./ChartScore";

const ChartsContainer = styled.div`
  margin-top: 75px;
  display: flex;
  column-gap: 30px;
  row-gap: 30px;
  flex-wrap: wrap;
`;

const ChartFirstColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  row-gap: 30px;
  min-width: 650px;
`;

const ChartRow = styled.div`
  display: flex;
  column-gap: 30px;
  row-gap: 30px;
  flex-wrap: wrap;
`;

const ChartSecondColumn = styled.div`
  flex: 1;
  display: flex;
  row-gap: 39px;
  column-gap: 39px;
  flex-wrap: wrap;
`;

const Charts = ({ userInformation }) => {
  const keyDataWithLogo = [
    {
      name: "Calories",
      value: `${new Intl.NumberFormat("en-IN").format(
        userInformation.keyData.calorieCount
      )}KCal`,
      logo: energy,
      color: "#FBEAEA",
    },
    {
      name: "Proteines",
      value: `${userInformation.keyData.proteinCount}g`,
      logo: chicken,
      color: "#E9F4FB",
    },
    {
      name: "Glucides",
      value: `${userInformation.keyData.carbohydrateCount}g`,
      logo: apple,
      color: "#FBF6E5",
    },
    {
      name: "Lipides",
      value: `${userInformation.keyData.lipidCount}g`,
      logo: cheeseburger,
      color: "#FCEAEF",
    },
  ];

  return (
    <ChartsContainer>
      <GlobalChartsStyle />
      <ChartFirstColumn>
        <ChartActivity userId={userInformation.id} />
        <ChartRow>
          <ChartSession userId={userInformation.id} />
          <ChartRadarActivity userId={userInformation.id} />
          <ChartScore
            score={userInformation.todayScore || userInformation.score}
          />
        </ChartRow>
      </ChartFirstColumn>
      <ChartSecondColumn>
        {keyDataWithLogo.map((keyData, index) => (
          <ChartKeyInfos key={index} keyData={keyData} />
        ))}
      </ChartSecondColumn>
    </ChartsContainer>
  );
};

export default Charts;

Charts.propTypes = {
  userInformation: PropTypes.shape({
    id: PropTypes.number,
    keyData: PropTypes.shape({
      calorieCount: PropTypes.number,
      carbohydrateCount: PropTypes.number,
      lipidCount: PropTypes.number,
      proteinCount: PropTypes.number,
    }),
    todayScore: PropTypes.number,
    score: PropTypes.number,
    userInfos: PropTypes.shape({
      age: PropTypes.number,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
    }),
  }),
};
