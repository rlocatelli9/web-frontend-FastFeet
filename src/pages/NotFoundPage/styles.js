import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;

  img {
    width: 260px;
    height: 120px;
  }

  h1 {
    font-size: 55px;
    margin: 0 auto;
  }

  p {
    font-size: 18px;
    text-align: center;
  }
`;

export const Back = styled.button`
  width: 80%;
  height: 38px;
  margin-top: 8px;
  background: #7d40e7 0% 0% no-repeat padding-box;
  border-radius: 4px;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.2, '#7d40e7')};
  }

  a {
    color: #ffffff;
    font-weight: bold;
  }
`;
