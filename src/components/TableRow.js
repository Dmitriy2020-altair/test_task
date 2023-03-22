import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, getUsers, updateUser } from '../store/actions/userActions';
import { Button } from './styles/Button.styled';
import { ButtonWrapper } from './styles/ButtonWrapper.styled';
import { LoaderWrapper } from './styles/LoaderWrapper';
import { StyledTableRow } from './styles/StyledTableRow.styled';
import { TableDataWrapper } from './styles/TableDataWrapper.styled';
import useViewPortWidth from '../hooks/useViewPortWidth';
import useLocalStorage from '../hooks/useLocalStorage';

export default function TableRow() {
  const {
    users,
    isLoading,
    isDeleting,
    isUpdating,
  } = useSelector(state => state.userReducer)
  const dispatch = useDispatch()
  const [isEdit, setIsEdit] = useState(false)
  const [editedUser, setEditedUser] = useLocalStorage('editedUser', {})
  const [sortOrder, setSortOrder] = useState({
    column: 'id',
    direction: 'asc',
  });
  const viewportWidth = useViewPortWidth(window)

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  useEffect(() => {
    if (isDeleting || isUpdating) {
      setIsEdit(false)
    }
  }, [isDeleting, isUpdating]);

  useEffect(() => {
    if (editedUser && editedUser.id) {
      setEditedUser(editedUser);
      setIsEdit(true)
    }
  }, [editedUser, editedUser.id, setEditedUser]);

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

  const handleSort = (columnName) => {
    if (sortOrder.column === columnName) {
      setSortOrder({
        ...sortOrder,
        direction: sortOrder.direction === 'asc' ? 'desc' : 'asc',
      });
    } else {
      setSortOrder({
        column: columnName,
        direction: 'asc',
      });
    }
  };

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

  const isTabletwidth = useMemo(() => {
    return viewportWidth < 1150
  }, [viewportWidth])

  return (
    <section>
      {(isLoading || isDeleting || isUpdating) && <LoaderWrapper />}
      {(!users.length && isDeleting) && <h3>No users in the list</h3>}
      {isEdit && (
        <StyledTableRow tablet={isTabletwidth}>
          <TableDataWrapper tablet={isTabletwidth}>
            <input onChange={handleInputChange} name="id" value={editedUser.id} disabled />
            <input onChange={handleInputChange} name="name" value={editedUser.name} />
            <input onChange={handleInputChange} name="age" value={editedUser.age} />
            <input onChange={handleInputChange} name="about_person" value={editedUser.about_person} />
          </TableDataWrapper>
          <ButtonWrapper tablet={isTabletwidth}>
            <Button onClick={() => onEdit(editedUser.id)} bg={getBgColor} color='#9d9898'>{getBtnTitle}</Button>
            <Button onClick={() => dispatch(deleteUser(editedUser.id))} disabled={isDeleting} bg='#f56363' color='#fff'>Delete</Button>
          </ButtonWrapper>
        </StyledTableRow>
      )}
      {!isEdit && users && (
        users
          .sort((a, b) => {
            const column = sortOrder.column;
            const direction = sortOrder.direction === 'asc' ? 1 : -1;
            const valueA = a[column];
            const valueB = b[column];
            if (valueA < valueB) {
              return -1 * direction;
            }
            if (valueA > valueB) {
              return 1 * direction;
            }
            return 0;
          })
          .map(({ id, name, age, about_person }) =>
            <StyledTableRow key={id}>
              <TableDataWrapper>
                <>
                  <div title='Click to sort the column' onClick={() => handleSort('id')}>{id}</div>
                  <div title='Click to sort the column' onClick={() => handleSort('name')}>{name}</div>
                  <div title='Click to sort the column' onClick={() => handleSort('age')}>{age}</div>
                  <div title='Click to sort the column' onClick={() => handleSort('about_person')}>{about_person}</div>
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