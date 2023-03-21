import styled from "styled-components";

export const ButtonWrapper = styled.div`
 display: flex;
 margin-left: auto;

 @media (max-width: 768px) {
    margin: 0;
  }

  button {
    width: 50%;
    margin: 2px;
  }
`