import { useParams } from "react-router-dom";
import styled from "styled-components";
import UserTitle from "../../components/UserTitle";
import { useUserInformation } from "../../utils/services";
import Charts from "../../components/Charts";
import Error from "../../components/Error";
import Loader from "../../components/Loader";

const ProfilContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 70px 90px 90px 110px;
  box-sizing: border-box;

  @media (max-width: 1445px) {
    border-radius: 25px;
    padding: 70px 20px 90px 20px;
  }
`;

const Profil = () => {
  const { userId } = useParams();
  const { data: user, isLoading, hasError } = useUserInformation(+userId);

  if (isLoading) {
    return (
      <ProfilContainer>
        <Loader />
      </ProfilContainer>
    );
  }

  if (hasError) {
    return (
      <ProfilContainer>
        <Error />
      </ProfilContainer>
    );
  }

  return (
    user && (
      <ProfilContainer>
        <UserTitle name={user.userInfos?.firstName || ""} />
        <Charts userInformation={user}></Charts>
      </ProfilContainer>
    )
  );
};

export default Profil;
