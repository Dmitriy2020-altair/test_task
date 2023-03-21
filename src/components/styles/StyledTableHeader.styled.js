import styled from "styled-components";

export const StyledTableHeader = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 40px 0;
  font-weight: 700;
  width: 54vw;

  @media (max-width: 768px) {
    width: auto;
    justify-content: space-around;

  }

  div {
    text-align: center;
    width: 13%;

    @media (max-width: 768px) {
    width: auto;
  }
  }
`