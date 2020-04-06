import styled from 'styled-components';

export const Container = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #ddd;
  min-width: 860px;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    justify-content: center;
    align-self: center;

    img {
      width: 200px;
      height: 30px;
      border-right: 1px solid #ddd;
      margin-right: 30px;
      padding-right: 30px;
    }

    > div {
      display: flex;
      align-items: center;

      ul {
        li {
          display: inline-block;

          & + li {
            margin-left: 20px;
          }

          a {
            text-transform: uppercase;
            color: #999999;
            font-weight: bold;

            &:focus {
              color: #444;
            }
          }
        }
      }
    }
  }

  aside {
    display: grid;
    grid-template-rows: repeat(2, 1fr);

    strong {
      display: block;
      margin: 0 auto;
    }

    a {
      font-size: 14px;
      color: #f23;
      text-transform: uppercase;

      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        margin-left: 5px;
      }
    }
  }
`;
