import {useLetter} from '../../hooks/useLetter';
import {FhomeStyle} from '../../style/Fhome.style';
import {FaRegHeart} from 'react-icons/fa';
import Effect from '../etc/Effect';
import {m, title, w} from '../../data/title';

const Fmain = () => {
  const {handleEffet, isEffect} = useLetter();

  return (
    <FhomeStyle>
      <div className="container" onClick={() => handleEffet()}>
        <header className="posting-header">
          <div className="posting-header-left">
            <img
              className="profile_img"
              src="../../main.jpg"
              alt="사용자 프로필"
              loading="lazy"
            />
            <h3>{title}</h3>
          </div>
          <svg
            aria-label="옵션 더 보기"
            fill="currentColor"
            height={24}
            viewBox="0 0 24 24"
            width={24}>
            <circle cx="12" cy="12" r="1.5"></circle>
            <circle cx="6" cy="12" r="1.5"></circle>
            <circle cx="18" cy="12" r="1.5"></circle>
          </svg>
        </header>

        {isEffect && <Effect />}

        <img
          src="../../assets/photo/post.png"
          alt="포스팅 이미지"
          className="posting-main"
        />

        <footer className="posting-footer">
          <header
            className="posting-footer-header"
            onClick={() => {
              document.location.href = 'tel:010-9666-7750';
            }}>
            <FaRegHeart className="heart" />
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="댓글 달기">
              <path
                d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="공유하기">
              <line
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                x1="22"
                x2="9.218"
                y1="3"
                y2="10.083"
              />
              <polygon
                points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </header>
          <div className="posting-footer-mid">
            <h3>{m.slice(1)}🤴</h3>
            <h4>
              <p>{w}야 2주년 너무 축하해 ❤️</p>
              <p>이번엔 간단하게 인생네컷으로 보는</p>
              <p>2주년을 준비해봤어</p>
            </h4>
          </div>
        </footer>
      </div>
    </FhomeStyle>
  );
};

export default Fmain;
