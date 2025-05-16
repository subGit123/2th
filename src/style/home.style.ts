import styled from 'styled-components';

export const HomeStyle = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  max-width: 540px;
  perspective: 1200px;

  .page {
    width: 100%;
    height: 90%;
    position: absolute;
    top: 40px;
    transform-origin: center;
    transition: transform 1s ease, box-shadow 1s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px auto;
    font-size: 1.2rem;
    padding: 20px;
    box-sizing: border-box;
    backface-visibility: hidden;

    .img {
      width: 90%;
      height: 65%;
      object-fit: cover;
      position: absolute;
      top: 90px;
      transform: scale(1);
      transition: transform 0.1s ease;
    }

    .img.flipped {
      opacity: 0;
      animation: fade-in-fwd 0.1s cubic-bezier(0.39, 0.575, 0.565, 1) both;
      box-shadow: 0 -20px 50px rgba(0, 0, 0, 0.4);
      transform: scale(1.1);
    }
  }

  @-webkit-keyframes fade-in-fwd {
    0% {
      -webkit-transform: translateZ(-80px) scale(0.9);
      transform: translateZ(-80px) scale(0.9);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateZ(0) scale(1);
      transform: translateZ(0) scale(1);
      opacity: 1;
    }
  }

  @keyframes fade-in-fwd {
    0% {
      -webkit-transform: translateZ(-80px) scale(0.9);
      transform: translateZ(-80px) scale(0.9);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateZ(0) scale(1);
      transform: translateZ(0) scale(1);
      opacity: 1;
    }
  }

  .contols {
    position: absolute;
    bottom: 150px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;

    span {
      width: 100%;
      font-size: 1.15rem;
      font-weight: 700;
    }
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 80%;

    .pre,
    .next {
      width: 100%;
      height: 100%;
      opacity: 0;
    }
  }

  @media screen and (max-width: 365px) {
    .contols {
      position: absolute;
      bottom: 90px;
    }
  }
`;
