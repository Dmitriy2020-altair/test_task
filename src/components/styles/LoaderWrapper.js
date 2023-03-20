import styled from "styled-components";
import { Loader } from "./Loader.styled";

const LoaderContainer = styled.div`
  position: absolute;
  top: 5%;
  left: 50%;
  display: flex;
  flex-direction: column;

  div {
    color: #fff;
    font-weight: 700;
    margin-top: 10px;
  }
`
export const LoaderWrapper = () => {
  return (
    <LoaderContainer>
      <Loader />
      <div>in process...</div>
    </LoaderContainer>
  )
}