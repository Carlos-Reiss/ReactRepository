import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.h1`
  max-width: 700px;
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
    animation: ${rotate} 2s alternate infinite;
  }
`;
export const Form = styled.form.attrs(props => ({
  disabled: props.error,
}))`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  &[disabled] {
    input {
      border: 1.5px solid rgba(255, 0, 0, 0.6);
    }
  }
  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 8px;
    font-size: 16px;
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #7159c1;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.2;
  }
  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 1.2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;
  li {
    font-size: 14px;
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & + li {
      border-top: 1px solid #eee;
    }
    a {
      color: #7159c1;
      text-decoration: none;
    }
  }
`;
