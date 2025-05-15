import styled from 'styled-components';
import {useLetter} from '../../hooks/useLetter';

const Main = () => {
  const {isLetter, handleNext} = useLetter();

  return (
    <MainStyle>
      <img src="../../assets/photo/baby.jpg" alt="profile" />
      <div
        className="content"
        onClick={e => {
          e.stopPropagation();
          handleNext();
        }}>
        {isLetter.map(idx => (
          <p key={idx.id}>{idx.content}</p>
        ))}
      </div>
    </MainStyle>
  );
};

const MainStyle = styled.div`
  display: flex;
  align-items: end;
  padding: 10px;
  height: 90%;
  margin-top: 20px;

  img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    margin-right: 20px;
    animation: tracking-in-expand-fwd-bottom 2.4s
      cubic-bezier(0.215, 0.61, 0.355, 1) both;
  }

  .content {
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    border: 1px solid #d3d3d3;
    background-color: #d3d3d3;
    width: 95%;
    height: 95%;
    padding: 20px;
    z-index: 5000;
    text-align: left;
    animation: tilt-in-left-2 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation-delay: 2.4s;

    p {
      margin: 10px 0;
      font-size: 1.15rem;
      line-height: 1.25;
      color: #333;
      font-weight: 500;
      font-family: 'GabiaSolmee', sans-serif;
    }

    @-webkit-keyframes tracking-in-expand-fwd-bottom {
      0% {
        letter-spacing: -0.5em;
        -webkit-transform: translateZ(-700px) translateY(500px);
        transform: translateZ(-700px) translateY(500px);
        opacity: 0;
      }
      40% {
        opacity: 0.6;
      }
      100% {
        -webkit-transform: translateZ(0) translateY(0);
        transform: translateZ(0) translateY(0);
        opacity: 1;
      }
    }
    @keyframes tracking-in-expand-fwd-bottom {
      0% {
        letter-spacing: -0.5em;
        -webkit-transform: translateZ(-700px) translateY(500px);
        transform: translateZ(-700px) translateY(500px);
        opacity: 0;
      }
      40% {
        opacity: 0.6;
      }
      100% {
        -webkit-transform: translateZ(0) translateY(0);
        transform: translateZ(0) translateY(0);
        opacity: 1;
      }
    }
  }

  @-webkit-keyframes tilt-in-left-2 {
    0% {
      -webkit-transform: rotateX(30deg) translateX(-300px) skewX(30deg);
      transform: rotateX(30deg) translateX(-300px) skewX(30deg);
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateX(0deg) translateX(0) skewX(0deg);
      transform: rotateX(0deg) translateX(0) skewX(0deg);
      opacity: 1;
    }
  }
  @keyframes tilt-in-left-2 {
    0% {
      -webkit-transform: rotateX(30deg) translateX(-300px) skewX(30deg);
      transform: rotateX(30deg) translateX(-300px) skewX(30deg);
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateX(0deg) translateX(0) skewX(0deg);
      transform: rotateX(0deg) translateX(0) skewX(0deg);
      opacity: 1;
    }
  }

  .fade-in {
    animation: fadeIn 0.1s ease-in-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media screen and (max-width: 365px) {
    .content {
      display: flex;
      flex-direction: column;
      border-radius: 15px;
      border: 1px solid #d3d3d3;
      background-color: #d3d3d3;
      width: 95%;

      padding: 20px;
      z-index: 5000;
      text-align: left;
      animation: tilt-in-left-2 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation-delay: 2.4s;

      p {
        margin: 10px 0;
        font-size: 0.9rem;
        line-height: 1.25;
        color: #333;
        font-weight: 500;
      }
    }
  }
`;

export default Main;
