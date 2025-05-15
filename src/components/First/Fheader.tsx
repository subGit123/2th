import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {FaRegHeart} from 'react-icons/fa';

const Fheader = ({handleOpen}: any) => {
  return (
    <FheaderStyle>
      <div className="top">
        <img src="../../assets/photo/logo.png" alt="logo" className="logo" />
        <div className="heart">
          <FaRegHeart onClick={handleOpen} />
          <span></span>
        </div>
      </div>

      <div className="storyContainer">
        <span>
          <Link to="/story" state={{start: 0, end: 31}}>
            <img src="../../main.jpg" alt="logo" className="mystory" />
            <p>②주년</p>
          </Link>
        </span>
        <span>
          <Link to="/story" state={{start: 0, end: 14}}>
            <img
              src="../../assets/photo/2023.jpg"
              alt="2023"
              className="storyimg"
            />
          </Link>
          <p>②⓪②③</p>
        </span>

        <span>
          <Link to="/story" state={{start: 15, end: 29}}>
            <img
              src="../../assets/photo/2024.png"
              alt="2024"
              className="storyimg"
            />
          </Link>
          <p>②⓪②④</p>
        </span>

        <span>
          <Link to="/story" state={{start: 30, end: 31}}>
            <img
              src="../../assets/photo/2025.jpeg"
              alt="2025"
              className="storyimg"
            />
          </Link>
          <p>②⓪②⑤</p>
        </span>
      </div>
    </FheaderStyle>
  );
};

const FheaderStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 10px;
  width: 100%;
  border-bottom: 1px solid #ccc;

  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    width: 95%;
  }

  .heart {
    position: relative;
    padding-right: 5px;

    svg {
      width: 24px;
      height: 24px;
      transition: all 0.3s ease;
    }

    svg:hover {
      fill: red;
      transform: scale(1.2);
      cursor: pointer;
    }

    span {
      position: absolute;
      right: 5px;
      background-color: red;
      border-radius: 50%;
      width: 8.5px;
      height: 8.5px;
    }
  }

  .logo {
    width: 103px;
    height: 103px;
    margin: -30px 0 -25px 0;
  }

  .storyContainer {
    display: flex;
    justify-content: space-between;
    text-align: center;
    width: 95%;
    padding: 0 15px;
  }

  @keyframes sparkle {
    0% {
      border: 3.5px solid#ccc;
    }
    50% {
      border: 3.5px solid #12b886;
    }
    100% {
      border: 3.5px solid #ccc;
    }
  }

  .mystory {
    width: 63px;
    height: 63px;
    border-radius: 50%;
    border: none;
    margin-bottom: -15px;
    border: 1px solid #ccc;
  }

  .storyimg {
    width: 63px;
    height: 63px;
    border-radius: 50%;
    border: none;
    margin-bottom: -15px;
    border: 3.5px solid #12b886;
    animation: sparkle 1.75s linear infinite;
  }
`;

export default Fheader;
