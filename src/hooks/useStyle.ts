import {keyframes} from 'styled-components';

export const useStyle = () => {
  const styleAni = keyframes`
    0% {
        opacity: 0;
        background-image: linear-gradient(to right bottom, white 0%, transparent 100%);
    }
    10%{
        opacity: 0.8;
        background-color: transparent;
    }
    20% {
        background-color: white;
        background-image: linear-gradient(to right bottom, white 0%, transparent 100%);
    }
    21%{
        background-image: linear-gradient(to right bottom, transparent 0%, white 100%);
    }
    30% {
        opacity: 0.8;
        background-color: transparent;
    }
    40% {
        opacity: 0;
    }
`;

  return {styleAni};
};
