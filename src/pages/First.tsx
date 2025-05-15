import styled from 'styled-components';
import Fheader from '../components/First/Fheader';
import Fmain from '../components/First/Fmain';
import {useLetter} from '../hooks/useLetter';
import Letter from '../components/Letter/Letter';

const First = () => {
  const {isOpen, handleOpen} = useLetter();

  return (
    <FirstStyle>
      <Fheader handleOpen={handleOpen} />
      <Fmain />
      {isOpen && <Letter handleOpen={handleOpen} />}
    </FirstStyle>
  );
};

const FirstStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  position: relative;
`;

export default First;
