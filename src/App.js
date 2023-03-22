import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ModalForm } from './components/Modal';
import { Button } from './components/styles/Button.styled';
import { Container } from './components/styles/Container.styled'
import GlobalStyels from './components/styles/Global';
import { LoaderWrapper } from './components/styles/LoaderWrapper';
import { CookieConsentMessage, CookieConsentWrapper } from './components/styles/StyledCookieConsent.styled';
import Table from './components/Table';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const { isAdding } = useSelector(state => state.userReducer)
  const [showCookieConsent, setShowCookieConsent] = useState(false);
  const [cookieConsent, setCookieConsent] = useLocalStorage('cookieConsent', false)

  useEffect(() => {
    setShowCookieConsent(!cookieConsent);
  }, [cookieConsent]);

  const handleConsent = () => {
    setCookieConsent(true);
    setShowCookieConsent(false);
  };

  const handleDenyConsent = () => {
    localStorage.clear();
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
            <Button
              mg={'20px 0 20px 0'}
              pd={'10px 25px'}
              onClick={handleConsent}
            >
              Allow
            </Button>
            <Button
              bg='#f56363'
              color='#fff'
              mg={'20px 0 20px 3px'}
              pd={'10px 25px'}
              onClick={handleDenyConsent}
            >
              Deny
            </Button>
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
