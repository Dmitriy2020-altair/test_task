import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../store/actions/getUsers';
import { Button } from './styles/Button.styled';
import { ButtonWrapper } from './styles/ButtonWrapper.styled';
import { Loader } from './styles/Loader.styled';
import { StyledTableRow } from './styles/StyledTableRow.styled';
import { TableDataWrapper } from './styles/TableDataWrapper.styled';

export default function TableRow() {
  const users = useSelector(state => state.userReducer.users)
  const isLoading = useSelector(state => state.userReducer.isLoading)
  const dispatch = useDispatch()
  console.log('users', users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    // <h1>we are here</h1>
    <>
      {isLoading && <Loader />}
      {users ? (
        users.map(({ id, name, age, about_person }) =>
          <StyledTableRow>
            <TableDataWrapper>
              <div>{id}</div>
              <div>{name}</div>
              <div>{age}</div>
              <div>{about_person}</div>
            </TableDataWrapper>
            <ButtonWrapper>
              <Button bg='#63f58c' color='#9d9898'>Edit</Button>
              <Button bg='#f56363' color='#fff'>Delete</Button>
            </ButtonWrapper>
          </StyledTableRow>
        )
      ) : (
        <h3>No users in the list</h3>
      )}
    </>
  )
}