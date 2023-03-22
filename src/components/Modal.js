import { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserPending } from "../store/actions/userActions";
import { Button } from "./styles/Button.styled";
import { ButtonWrapper, ClosingCross, InputField, InputLabel, InputWrapper, ModalContent, ModalWrapper } from "./styles/StyledModalForm.styled";

export const ModalForm = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(JSON.parse(localStorage.getItem('formData')) || {});
  const users = useSelector(state => state.userReducer.users)

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    const cachedFormData = JSON.parse(localStorage.getItem('formData'));
    if (cachedFormData) {
      setFormData(cachedFormData);
    }
  }, []);

  const generatedId = useMemo(() => {
    return String(users?.reduce((max, user) => Math.max(max, user.id), 0) + 1);
  }, [users])

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      id: generatedId,
      [name]: value
    });
  };

  const closeModal = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    localStorage.removeItem('formData');
    setFormData({})
    event.preventDefault();
    dispatch(addUserPending(formData));
    closeModal();
  };

  return (
    <ModalWrapper style={{ display: open ? 'flex' : 'none' }} onClick={() => setOpen(false)}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <ClosingCross title="Close Modal" onClick={() => setOpen(false)}>X</ClosingCross>
        <InputWrapper>
          <InputLabel htmlFor="name">Name:</InputLabel>
          <InputField placeholder="Type your name" type="text" name="name" value={formData.name || ''} onChange={handleChange} />
        </InputWrapper>
        <InputWrapper>
          <InputLabel htmlFor="age">Age:</InputLabel>
          <InputField placeholder="Type your age" type="text" name="age" value={formData.age || ''} onChange={handleChange} />
        </InputWrapper>
        <InputWrapper>
          <InputLabel htmlFor="about_person">About:</InputLabel>
          <InputField placeholder="Type about yourserlf" type="text" name="about_person" value={formData.about_person || ''} onChange={handleChange} />
        </InputWrapper>
        <ButtonWrapper>
          <Button pd={'7px 35px'} onClick={handleSubmit}>Submit</Button>
        </ButtonWrapper>
      </ModalContent>
    </ModalWrapper>
  )
}
