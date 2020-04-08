import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  margin: 98px auto;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
`;

export const ContentHeader = styled.div`
  header {
    width: 300px;
    height: 32px;
    margin-bottom: 34px;
    font-size: 25px;
    font-weight: bold;
    color: #444444;
    opacity: 1;
  }

  form {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    input {
      width: 237px;
      height: 36px;
      padding: 9px 40px;
      background: #ffffff 0% 0% no-repeat padding-box;
      border: 1px solid #dddddd;
      border-radius: 4px;
      opacity: 1;
    }

    button {
      width: 142px;
      height: 36px;
      padding: 9px 16px;
      color: #fff;
      font-weight: bold;
      background: #7d40e7 0% 0% no-repeat padding-box;
      border-radius: 4px;
      opacity: 1;
    }
  }
`;

export const ContentTable = styled.table`
  margin-top: 22px;
  border-collapse: collapse;

  thead {
    width: 15px;
    height: 40px;
    color: #444444;

    th {
      font-size: 20px;
      font-weight: bold;
      text-align: left;
      letter-spacing: 0px;
      padding: 10px 25px;

      &:last-child {
        text-align: right;
      }
    }
  }

  tbody {
    tr {
      height: 57px;
      background: #fff 0% 0% no-repeat padding-box;
      border-radius: 4px;

      & + tr {
        margin-top: 21px;
      }

      td {
        width: 180px;
        height: 57px;
        font-size: 18px;
        text-align: left;
        letter-spacing: 0px;
        border: none;

        color: #666;
        opacity: 1;
        padding: 15px 25px;
        border-bottom: 21px solid #f5f5f5;

        > span {
          width: 35px;
          height: 35px;
          background: #ebfbfa 0% 0% no-repeat padding-box;
          color: ${darken(0.2, '#ebfbfa')};
          border-radius: 50%;
          padding: 7px 8px;
          border: 1px solid ${darken(0.05, '#ebfbfa')};
        }

        span#status {
          position: relative;
          font-size: 14px;
          font-weight: bold;
          padding: 3px 7px 3px 22px;
          background: #dff0df 0% 0% no-repeat padding-box;
          border-radius: 50px 50px;
          color: #2ca42b;

          :before {
            position: absolute;
            content: '';
            height: 10px;
            width: 10px;
            left: 8px;
            top: 8px;
            background: #2ca42b;
            border-radius: 50%;
          }
        }

        &:first-child {
          width: 80px;
        }

        &:last-child {
          text-align: right;
          margin-right: 5px;
          font-size: 21px;
        }
      }
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  button {
    width: 142px;
    height: 36px;
    padding: 9px 16px;
    margin: 0 20px;
    color: #fff;
    font-weight: bold;
    background: #7d40e7 0% 0% no-repeat padding-box;
    border-radius: 4px;
    opacity: 1;
  }

  button[disabled] {
    opacity: 0.5;
    cursor: default;
  }

  button[disabled]:hover {
    opacity: 0.5;
  }

  button:hover {
    opacity: 0.7;
  }
`;
