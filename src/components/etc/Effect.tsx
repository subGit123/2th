import styled, {keyframes} from 'styled-components';
import {BsFillBalloonHeartFill} from 'react-icons/bs';

const TOTAL_ICONS = 20;

const Effect = () => {
  const randomColor = (): string => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const icons = Array.from({length: TOTAL_ICONS}, (_, index) => {
    const left = Math.random() * 100;
    const delay = Math.random() * 5;

    return (
      <FallingIcon
        key={index}
        style={{
          left: `${left}vw`,
          animationDelay: `${delay}s`,
        }}
        color={randomColor()}>
        <BsFillBalloonHeartFill />
      </FallingIcon>
    );
  });

  return <EffectContainer>{icons}</EffectContainer>;
};

export default Effect;

const fall = keyframes`
  0% {
    transform: translateY(-5px);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  100% {
    transform: translateY(110vh);
    opacity: 0;
  }
`;

const EffectContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  max-width: 540px;
  width: 100%;
  height: 100vh;
  z-index: 5000;
  pointer-events: none;
`;

const FallingIcon = styled.div<{color: string}>`
  position: absolute;
  top: -30px;
  color: ${({color}) => color};
  animation: ${fall} 6s linear infinite;

  svg {
    width: 30px;
    height: 30px;
  }
`;
