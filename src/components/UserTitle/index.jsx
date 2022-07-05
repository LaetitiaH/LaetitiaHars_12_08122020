import styled from "styled-components";
import PropTypes from "prop-types";

const Title = styled.div`
  font-size: 48px;
  font-weight: 500;
  width: max-content;
  color: #000000;
`;

const UserName = styled.span`
  color: #ff0000;
`;

const MotivationText = styled.div`
  font-weight: 400;
  font-size: 18px;
  margin-top: 40px;
  color: #000000;
`;

const UserTitle = ({ name }) => {
  return (
    <>
      <Title>
        Bonjour <UserName>{name}</UserName>
      </Title>
      <MotivationText>
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </MotivationText>
    </>
  );
};

export default UserTitle;

UserTitle.propTypes = {
  name: PropTypes.string,
};
