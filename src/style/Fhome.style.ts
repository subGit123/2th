import styled from 'styled-components';

export const FhomeStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin-top: 20px;
  width: 100%;
  flex-wrap: wrap;
  position: relative;
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    width: 100%;
  }

  .posting-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
  }

  .posting-header-left {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .profile_img {
    display: inline-block;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: silver;
    margin-right: 5px;
  }

  .posting-main {
    display: inline-block;
    width: 80%;
    max-height: 470px;
  }

  .posting-footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    width: 100%;
    margin-top: 10px;
  }

  .posting-footer-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    margin: 0 auto;
    gap: 20px 5px;
    width: 90%;
  }

  .heart {
    width: 24px;
    height: 24px;
  }

  .posting-footer-mid {
    display: flex;
    align-items: flex-start;
    margin-left: 20px;
  }

  .posting-footer-mid h3 {
    margin-right: 10px;
    margin-bottom: 0;
  }

  .posting-footer-mid h4 {
    margin-bottom: 20px;
  }

  .posting-footer-mid h4 p {
    margin-bottom: 0;
    line-height: 1.5px;
  }
`;
