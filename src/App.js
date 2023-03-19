import AddNewUserButton from './components/AddNewUserButton';
import { Container } from './components/styles/Container.styled'
import GlobalStyels from './components/styles/Global';
import Table from './components/Table';

function App() {

  return (
    <>
      <GlobalStyels />
      <Container>
        <AddNewUserButton />
        <Table/>
      </Container>
    </>
  );
}

export default App;
