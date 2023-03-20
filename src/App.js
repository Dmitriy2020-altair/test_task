import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ModalForm } from './components/Modal';
import { Button } from './components/styles/Button.styled';
import { Container } from './components/styles/Container.styled'
import GlobalStyels from './components/styles/Global';
import { Loader } from './components/styles/Loader.styled';
import { LoaderWrapper } from './components/styles/LoaderWrapper';
import Table from './components/Table';

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const { isAdding } = useSelector(state => state.userReducer)

  const openModal = () => {
    setIsOpenModal(true)
  }

  return (
    <>
      <GlobalStyels />
      <Container>
        <Button onClick={openModal}>Add New User</Button>
        {isAdding && (
          <LoaderWrapper>
            <Loader />
            <div>in process...</div>
          </LoaderWrapper>
        )}
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
