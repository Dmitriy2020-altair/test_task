import styled from "styled-components";

export const TableDataWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 53vw;
  text-align: center;

  @media (max-width: 768px) {
    width: auto;
    justify-content: space-around;
  }

  @media (max-width: 500px) {
    flex-direction: column;
  }

  div {
    text-align: center;
    width: 13%;
    cursor: pointer;

    @media (max-width: 768px) {
    width: auto;
  }
  }

`