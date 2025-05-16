import styled from 'styled-components';
import {ContentProps} from '../models/content.model';
import {RiCloseLargeFill} from 'react-icons/ri';
import {Link} from 'react-router-dom';
import {useNext} from '../hooks/useNext';
import {title} from '../data/title';

interface HeaderProps extends Pick<ContentProps, 'date'> {
  start: number;
  end: number;
  currentPage: number;
}

const Header = ({date, start, end, currentPage}: HeaderProps) => {
  const {currentRef} = useNext({
    start,
    end,
  });
  return (
    <HeaderStyle>
      <div className="main">
        <div className="left-header">
          <img src="../main.jpg" alt="main img" />
          <h3>{title}</h3>
          <p>{date}</p>
        </div>
        <div>
          <Link to="/">
            <RiCloseLargeFill />
          </Link>
        </div>
      </div>

      {end - start > 26 ? (
        <div ref={currentRef}>
          <span className="number-page">
            <p className="active">{currentPage + 1}</p>/{end}
          </span>
        </div>
      ) : (
        <div className="pagination" ref={currentRef}>
          <ul>
            {Array.from({length: end - start + 1}, (_, index) => (
              <li key={index}>
                <p className={currentPage === start + index ? 'active' : ''}>
                  ○
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  padding: 0 20px;
  margin: 0;

  .main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 20px;
    margin: 0;
  }

  .left-header {
    display: flex;
    align-items: center;
    gap: 10px;

    img {
      height: 32px;
      width: 32px;
      border-radius: 50px;
    }
  }

  svg {
    width: 28px;
    height: 28px;
    color: #000;
    z-index: 3000;
  }

  .pagination {
    display: flex;
    align-items: center;
    justify-content: start;
    margin: -40px 50px 0 0;
    z-index: 5;
    row-gap: 10px;
  }

  .pagination ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    list-style-type: none;
  }

  .active {
    font-weight: bold;
    color: blue;
    font-size: 1.25rem;
  }

  .number-page {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -25px;
    text-align: center;
  }
`;

export default Header;
