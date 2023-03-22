import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 10;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  align-items: center;
  width: 20%;
  background-color: #edefef;

  @media (max-width: 768px) {
    width: 65%;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width: 80%;
`;

export const InputLabel = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const InputField = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  background-color: #d6d8d8;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ClosingCross = styled.div`
  cursor: pointer;
  margin-left: 90%;
  font-weight: 700;
  font-size: 20px;
`
