import {useNext} from '../hooks/useNext';
import {HomeStyle} from '../style/home.style';
import Header from '../components/Header';
import Bottom from '../components/Bottom';
import data from '../data/contents.json';
import {useLocation} from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const {start, end} = location.state || {start: 0, end: 0};

  const {
    handleNext,
    handlePre,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    currentRef,
    flipped,
    currentPage,
  } = useNext({start, end});

  return (
    <HomeStyle>
      <Header
        date={data[currentPage].date}
        start={start}
        end={end}
        currentPage={currentPage}
      />

      <div
        className={`page ${flipped ? 'flipped' : ''}`}
        ref={currentRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={e => {
          e.stopPropagation();
          handleTouchEnd();
        }}>
        <img
          src={data[currentPage].img}
          alt={`${data[currentPage].date}`}
          loading="lazy"
        />
      </div>

      <div className="contols">
        <span>{data[currentPage].content}</span>
      </div>
      <Bottom />

      <div className="btn">
        <button className="pre" onClick={handlePre}>
          이전
        </button>
        <button className="next" onClick={handleNext}>
          다음
        </button>
      </div>
    </HomeStyle>
  );
};

export default Home;
