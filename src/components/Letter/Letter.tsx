import styled from 'styled-components';
import Top from './LTop';
import Main from './LMain';

const Letter = ({handleOpen}: any) => {
  return (
    <LetterStyle>
      <div className="modal-body" onClick={handleOpen}>
        <Top handleOpen={handleOpen} />
        <Main />
      </div>
    </LetterStyle>
  );
};

const LetterStyle = styled.div`
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

  @-webkit-keyframes slit-in-vertical {
    0% {
      -webkit-transform: translateZ(-800px) rotateY(90deg);
      transform: translateZ(-800px) rotateY(90deg);
      opacity: 0;
    }
    54% {
      -webkit-transform: translateZ(-160px) rotateY(87deg);
      transform: translateZ(-160px) rotateY(87deg);
      opacity: 1;
    }
    100% {
      -webkit-transform: translateZ(0) rotateY(0);
      transform: translateZ(0) rotateY(0);
    }
  }
  @keyframes slit-in-vertical {
    0% {
      -webkit-transform: translateZ(-800px) rotateY(90deg);
      transform: translateZ(-800px) rotateY(90deg);
      opacity: 0;
    }
    54% {
      -webkit-transform: translateZ(-160px) rotateY(87deg);
      transform: translateZ(-160px) rotateY(87deg);
      opacity: 1;
    }
    100% {
      -webkit-transform: translateZ(0) rotateY(0);
      transform: translateZ(0) rotateY(0);
    }
  }

  .modal-body {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 56px 32px 32px;
    border-radius: 15px;
    box-shadow: 0 0 20px rgb(0, 0, 0, 0.5);
    background-color: #fff;
    width: 80%;
    height: 70%;
  }
`;

export default Letter;
