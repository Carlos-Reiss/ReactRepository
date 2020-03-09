import styled from 'styled-components';

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
