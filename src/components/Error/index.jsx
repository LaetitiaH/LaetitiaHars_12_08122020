import styled from "styled-components";

const Text = styled.div`
  color: red;
  font-size: 24px;
  align-self: center;
  text-align: center;
  width: 100%;
`;

const Error = () => {
  return <Text>Une erreur est survenue, veuillez rafraichir la page.</Text>;
};

export default Error;
