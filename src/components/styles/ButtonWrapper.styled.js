import styled, { css } from "styled-components";

export const ButtonWrapper = styled.div`
 display: flex;
 margin-left: auto;

 button {
    width: 50%;
    margin: 2px;
  }

 ${({ tablet }) =>
    tablet &&
    css`
      margin-left: 0;
      justify-content: space-around;

      button {
        width: 45%;
        margin: 10px;
  }
    }
  `}

 @media (max-width: 768px) {
    margin: 30px 0 5px 0;
  }

`