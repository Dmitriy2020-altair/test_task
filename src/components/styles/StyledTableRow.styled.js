import styled from "styled-components";

export const StyledTableRow = styled.section`
  display: flex;
  margin-top: 10px;
  border: 1px solid #dedbdb;
  border-radius: 5px;
  padding: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  div {
    text-align: center;
  }
`