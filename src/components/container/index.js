import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  to{
    transform: rotate(0deg);
  }
  from{
    transform: rotate(360deg);
  }
`;

const Container = styled.h1`
  max-width: 900px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.6);
  padding: 30px;
  margin: 80px auto;
  h1 {
    font-size: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  button:hover {
    cursor: pointer;
    transition: 1s all;
    padding: 15px;
    border-radius: 50%;
    animation: ${rotate} 1s alternate;
  }
  .backhome:hover {
    width: 32px;
    height: 32px;
    margin-top: 5px;
    transition: 500ms;
    border: 1px solid #eee;
    border-radius: 4px;
  }
`;

export default Container;
