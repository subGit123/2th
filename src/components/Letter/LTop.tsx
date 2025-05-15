import styled from 'styled-components';
import {GoArrowLeft} from 'react-icons/go';
import {IoCallOutline} from 'react-icons/io5';
import {AiOutlineVideoCamera} from 'react-icons/ai';
import {m} from '../../data/title';

const Top = ({handleOpen}: any) => {
  return (
    <TopStyle>
      <div className="left">
        <GoArrowLeft className="arrow" onClick={() => handleOpen()} />
        <img src="../../assets/photo/baby.jpg" alt="profile" />
        <p>{m}</p>
      </div>
      <div className="right">
        <IoCallOutline
          className="icon"
          onClick={() => {
            document.location.href = 'tel:010-9666-7750';
          }}
        />
        <AiOutlineVideoCamera className="icon" />
      </div>
    </TopStyle>
  );
};

const TopStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: -50px;

  .left,
  .right {
    display: flex;
    align-items: center;

    img {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      margin-right: 10px;
    }

    .arrow {
      margin: 0 10px;
      width: 28px;
      height: 28px;
    }

    .icon {
      margin: 0 5px;
      width: 23px;
      height: 24.5px;
    }
  }
`;

export default Top;
