import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #7d40e7 0% 0% no-repeat padding-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 360px;
  height: 425px;
  padding: 30px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 10px #00000033;
  border-radius: 4px;
  opacity: 1;

  img {
    padding-top: 20px;
    margin: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    opacity: ${(props) => (props.onLoading ? 0.5 : 1)};

    label {
      color: #444444;
      font-weight: bold;
      text-transform: uppercase;
    }

    input {
      margin: 10px 0;
      display: block;
      width: 100%;
      height: 38px;
      padding: 10px;
      border: 1px solid #dddddd;
      border-radius: 4px;
      opacity: 1;
      color: 444444;

      &:placeholder-shown {
        color: #999999;
        letter-spacing: 0px;
      }

      &:focus {
        border: 1px solid #7d40e7;
      }

      &:disabled {
        background: #eee;
        opacity: 0.4;
      }
    }

    span {
      color: #f23;
      align-self: flex-start;
      margin: 0 0 10px;
      padding: 2px 4px;
      font-size: 12px;
      font-weight: normal;
      border-radius: 5px;
      border: 1px solid #f00;
    }

    button {
      width: 100%;
      height: 38px;
      margin-top: 8px;
      background: #7d40e7 0% 0% no-repeat padding-box;
      border-radius: 4px;
      color: #ffffff;
      font-weight: bold;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.2, '#7d40e7')};
      }
    }
  }
`;
