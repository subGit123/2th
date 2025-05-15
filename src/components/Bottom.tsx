import styled from 'styled-components';
import {FaRegComment} from 'react-icons/fa6';
import {FaRegHeart} from 'react-icons/fa';
import {FaHeart} from 'react-icons/fa';
import {LuSend} from 'react-icons/lu';
import {useHeart} from '../hooks/useHeart';

const Bottom = () => {
  const {heart, handleClick} = useHeart();

  return (
    <BottomStyle>
      <div className="left">
        <FaRegComment className="comment" />
        <input placeholder="메시지" disabled />
      </div>

      <div className="right">
        {heart ? (
          <FaHeart onClick={handleClick} className="clickheart" />
        ) : (
          <FaRegHeart onClick={handleClick} className="heart" />
        )}
        <LuSend className="send" />
      </div>
    </BottomStyle>
  );
};

const BottomStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  gap: 20px;

  .comment {
    transform: rotateY(-180deg);
    height: 24px;
    width: 24px;
  }

  input {
    padding-left: 10px;
    border-radius: 30px;
    height: 32px;
  }

  .heart {
    height: 24px;
    width: 24px;
  }
  .clickheart {
    height: 24px;
    width: 24px;
    color: red;
    /* background-color: red; */
  }

  .send {
    height: 24px;
    width: 24px;
  }

  .left,
  .right {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 10px;
    margin: 0 auto;
  }
`;

export default Bottom;
