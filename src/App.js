import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ModalForm } from './components/Modal';
import { Button } from './components/styles/Button.styled';
import { Container } from './components/styles/Container.styled'
import GlobalStyels from './components/styles/Global';
import { LoaderWrapper } from './components/styles/LoaderWrapper';
import { CookieConsentMessage, CookieConsentWrapper } from './components/styles/StyledCookieConsent.styled';
import Table from './components/Table';

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const { isAdding } = useSelector(state => state.userReducer)
  const [showCookieConsent, setShowCookieConsent] = useState(false);

  useEffect(() => {
    const hasConsent = localStorage.getItem('cookieConsent');
    setShowCookieConsent(!hasConsent);
  }, []);

  const handleConsent = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowCookieConsent(false);
  };
  
  const openModal = () => {
    setIsOpenModal(true)
  }

  return (
    <>
      <GlobalStyels />
      <Container>
        {showCookieConsent && (
          <CookieConsentWrapper>
            <CookieConsentMessage>
              We use cookies to improve user experience. Do you want to allow the use of cookies?
            </CookieConsentMessage>
            <Button mg={'20px 0 20px 0'} pd={'10px 25px'} onClick={handleConsent}>Allow</Button>
          </CookieConsentWrapper>
        )}
        <Button onClick={openModal}>Add New User</Button>
        {isAdding && <LoaderWrapper />}
        <ModalForm
          open={isOpenModal}
          setOpen={setIsOpenModal}
        />
        <Table />
      </Container>
    </>
  );
}

export default App;
