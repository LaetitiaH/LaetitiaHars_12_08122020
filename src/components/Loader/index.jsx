import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
 
    to {
    transform: rotate(360deg);
    }
`;

const LoaderContent = styled.div`
  padding: 10px;
  border: 6px solid red;
  border-bottom-color: transparent;
  border-radius: 50%;
  animation: ${rotate} 1s infinite linear;
  height: 200px;
  width: 200px;
  align-self: center;
  margin: 0 auto;
`;

const Loader = () => <LoaderContent></LoaderContent>;

export default Loader;
