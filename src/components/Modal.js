import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { addUser } from "../store/actions/userActions";
import { Button } from "./styles/Button.styled";

const ModalWrapper = styled.div`
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

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  align-items: center;
  width: 20%;
  background-color: #edefef;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width: 80%;
`;

const InputLabel = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const InputField = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  background-color: #d6d8d8;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ClosingCross = styled.div`
  cursor: pointer;
  margin-left: 90%;
  font-weight: 700;
  font-size: 20px;
`

export const ModalForm = ({ open, setOpen }) => {
  const INITIAL_STATE = {
    name: '',
    age: '',
    about_person: ''
  };
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(JSON.parse(localStorage.getItem('formData')) || INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    const cachedFormData = JSON.parse(localStorage.getItem('formData'));
    if (cachedFormData) {
      setFormData(cachedFormData);
    }
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const closeModal = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    localStorage.removeItem('formData');
    setFormData(INITIAL_STATE)
    event.preventDefault();
    dispatch(addUser(formData));
    closeModal();
  };

  return (
    <ModalWrapper style={{ display: open ? 'flex' : 'none' }} onClick={() => setOpen(false)}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <ClosingCross title="Close Modal" onClick={() => setOpen(false)}>X</ClosingCross>
        <InputWrapper>
          <InputLabel htmlFor="name">Name:</InputLabel>
          <InputField placeholder="Type your name" type="text" name="name" value={formData.name} onChange={handleChange} />
        </InputWrapper>
        <InputWrapper>
          <InputLabel htmlFor="age">Age:</InputLabel>
          <InputField placeholder="Type your age" type="text" name="age" value={formData.age} onChange={handleChange} />
        </InputWrapper>
        <InputWrapper>
          <InputLabel htmlFor="about_person">About:</InputLabel>
          <InputField placeholder="Type about yourserlf" type="text" name="about_person" value={formData.about_person} onChange={handleChange} />
        </InputWrapper>
        <ButtonWrapper>
          <Button pd={'7px 35px'} onClick={handleSubmit}>Submit</Button>
        </ButtonWrapper>
      </ModalContent>
    </ModalWrapper>
  )
}
