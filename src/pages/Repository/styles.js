import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  #load {
    margin-bottom: 15px;
    opacity: 0.7;
    animation: ${rotate} 800ms linear infinite;
  }
`;
export const Owner = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    margin-top: 20px;
  }
  img {
    height: 42px;
    border-radius: 50%;
  }
  p {
    font-size: 15px;
    font-weight: normal;
    max-width: 400px;
    color: #666;
  }
  a {
    padding: 10px;
    margin-left: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    color: #7159c1;
    text-decoration: none;
    .icon {
      margin-right: 5px;
    }
    :hover {
      cursor: pointer;
      padding: 15px;
      transition: 500ms;
      border: 1px solid #eee;
      border-radius: 8px;
    }
  }
`;
export const IssuesList = styled.div`
  width: 100%;
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;
  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 6px;
    & + li {
      margin-top: 10px;
    }
  }
  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  div img {
    width: 36px;
    border-top: 2px solid #eee;
    border-radius: 50%;
  }
  div p {
    font-size: 16px;
    font-style: italic;
    font-weight: normal;
    margin-left: 10px;
    margin-top: 5px;
    color: #999;
  }
  div strong {
    display: flex;
    justify-content: center;
  }
  div strong a {
    flex: 1;
    font-size: 14px;
    margin-left: 15px;
    color: #333;
    &:hover {
      color: #7159c1;
    }
  }
`;
export const FilterList = styled.div`
  display: flex;
  margin: 10px;
`;
