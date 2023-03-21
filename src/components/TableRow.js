import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, getUsers, updateUser } from '../store/actions/userActions';
import { Button } from './styles/Button.styled';
import { ButtonWrapper } from './styles/ButtonWrapper.styled';
import { LoaderWrapper } from './styles/LoaderWrapper';
import { StyledTableRow } from './styles/StyledTableRow.styled';
import { TableDataWrapper } from './styles/TableDataWrapper.styled';

export default function TableRow() {
  const {
    users,
    isLoading,
    isDeleting,
    isUpdating,
  } = useSelector(state => state.userReducer)
  const dispatch = useDispatch()
  const [isEdit, setIsEdit] = useState(false)
  const [editedUser, setEditedUser] = useState(JSON.parse(localStorage.getItem('editedUser')) || {})
  const [cachedUsers, setCachedUsers] = useState([]);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  useEffect(() => {
    if (isDeleting) {
      setIsEdit(false)
    }
  }, [isDeleting]);

  useEffect(() => {
    if (isUpdating) {
      setIsEdit(false)
    }
  }, [isUpdating]);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    const cachedUsers = JSON.parse(localStorage.getItem('users'));
    if (cachedUsers) {
      setCachedUsers(cachedUsers);
    } else {
      setCachedUsers(users)
    }
  }, [users]);

  useEffect(() => {
    localStorage.setItem('editedUser', JSON.stringify(editedUser));
  }, [editedUser]);

  useEffect(() => {
    const cachedUser = JSON.parse(localStorage.getItem('editedUser'));
    if (cachedUser && editedUser.id) {
      setEditedUser(cachedUser);
      setIsEdit(true)
    }
  }, [editedUser.id]);

  const onEdit = (userId) => {
    if (isEdit) {
      localStorage.removeItem('editedUser');
      dispatch(updateUser(editedUser.id, editedUser))
    } else {
      const currentUser = users.filter((user) => user.id === userId)
      setEditedUser(currentUser[0])
      setIsEdit(!isEdit)
    }
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const getBgColor = useMemo(() => {
    return isEdit ? '#63d6f5' : '#63f58c'
  }, [isEdit])

  const getBtnTitle = useMemo(() => {
    return isEdit ? 'Save' : 'Edit'
  }, [isEdit])

  return (
    <section>
      {(isLoading || isDeleting || isUpdating) && <LoaderWrapper />}
      {(!users.length && isDeleting) && <h3>No users in the list</h3>}
      {isEdit && (
        <StyledTableRow>
          <TableDataWrapper>
            <>
              <input onChange={handleInputChange} name="id" value={editedUser.id} disabled />
              <input onChange={handleInputChange} name="name" value={editedUser.name} />
              <input onChange={handleInputChange} name="age" value={editedUser.age} />
              <input onChange={handleInputChange} name="about_person" value={editedUser.about_person} />
            </>
          </TableDataWrapper>
          <ButtonWrapper>
            <Button onClick={() => onEdit(editedUser.id)} bg={getBgColor} color='#9d9898'>{getBtnTitle}</Button>
            <Button onClick={() => dispatch(deleteUser(editedUser.id))} disabled={isDeleting} bg='#f56363' color='#fff'>Delete</Button>
          </ButtonWrapper>
        </StyledTableRow>
      )}
      {!isEdit && cachedUsers && (
        cachedUsers.map(({ id, name, age, about_person }) =>
          <StyledTableRow key={id}>
            <TableDataWrapper>
              <>
                <div>{id}</div>
                <div>{name}</div>
                <div>{age}</div>
                <div>{about_person}</div>
              </>
            </TableDataWrapper>
            <ButtonWrapper>
              <Button onClick={() => onEdit(id)} bg={getBgColor} color='#9d9898'>{getBtnTitle}</Button>
              <Button onClick={() => dispatch(deleteUser(id))} disabled={isDeleting} bg='#f56363' color='#fff'>Delete</Button>
            </ButtonWrapper>
          </StyledTableRow>
        )
      )}
    </section >
  )
}