import styled from 'styled-components';
import {CgSandClock} from 'react-icons/cg';

const Loading = () => {
  return (
    <LoadingStyle>
      <CgSandClock />
    </LoadingStyle>
  );
};

const LoadingStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  max-width: 540px;
  width: 100%;
  height: 100vh;
  z-index: 5000;
  background-color: rgba(0, 0, 0, 0.6);
  animation: slit-in-vertical 0.45s ease-out both;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  svg {
    animation: rotate-scale-up 0.65s linear both;
    width: 30%;
    height: 30%;
  }

  @-webkit-keyframes rotate-scale-up {
    0% {
      -webkit-transform: scale(1) rotateZ(0);
      transform: scale(1) rotateZ(0);
    }
    50% {
      -webkit-transform: scale(2) rotateZ(180deg);
      transform: scale(2) rotateZ(180deg);
    }
    100% {
      -webkit-transform: scale(1) rotateZ(360deg);
      transform: scale(1) rotateZ(360deg);
    }
  }
  @keyframes rotate-scale-up {
    0% {
      -webkit-transform: scale(1) rotateZ(0);
      transform: scale(1) rotateZ(0);
    }
    50% {
      -webkit-transform: scale(2) rotateZ(180deg);
      transform: scale(2) rotateZ(180deg);
    }
    100% {
      -webkit-transform: scale(1) rotateZ(360deg);
      transform: scale(1) rotateZ(360deg);
    }
  }
`;

export default Loading;
