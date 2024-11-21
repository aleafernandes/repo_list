import styled from "styled-components";
import { Link } from "react-router-dom";

export const Loading = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  padding: 30px;
  margin: 80px auto;

  h1 {
    font-size: 19px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 150px;
    border-radius: 20%;
    margin: 20px 0;
  }
  h1 {
    font-size: 19px;
    color: #0d2636;
  }
  p {
    font-size: 16px;
    color: #000;
    margin-top: 5px;
    text-align: center;
    line-height: 1.4;
    max-width: 400px;
  }
`;
export const BackButton = styled(Link)`
  background: transparent;

  border: 0;

  outline: 0;
`;

export const IssuesList = styled.ul`
  list-style: none;
  margin-top: 30px;
  paddin-top: 30px;
  border-top: 1px solid #eee;

  #tag {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    margin-right: 10px;
  }

  li {
    display: flex;
    padding: 15px 10px;

    & + li {
      margin-top: 12px;
    }

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #0d2636;
    }

    div {
      flex: 1;
      margin-left: 12px;

      p {
        margin-top: 10px;
        font-size: 12px;
        color: #000;
      }
    }

    strong {
      font-size: 15px;

      a {
        color: #222;
        text-decoration: none;
        transform: 0.3s;

        &:hover {
          color: #0071db;
        }
      }

      span {
        background: #222;
        color: #fff;
        border-radius: 4px;
        font-size: 12px;
        font-weight: 600;
        padding: 5px 7px;
        margin-left: 10px;
      }
    }
  }
`;

export const PageActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    background: #222;
    color: #fff;
    border: 0;
    outline: 0;
    border-radius: 4px;

    padding: 5px 10px;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
`;
export const IssuesListView = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 3px;
  margin-top: 30px;

  button {
    background: #222;
    color: #fff;
    border: 0;
    outline: 0;
    border-radius: 4px;
    padding: 5px 10px;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }

    &:active {
      background: #0d2636;
    }
  }
`;
