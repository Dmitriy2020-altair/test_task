import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, getUsers } from '../store/actions/userActions';
import { Button } from './styles/Button.styled';
import { ButtonWrapper } from './styles/ButtonWrapper.styled';
import { Loader } from './styles/Loader.styled';
import { StyledTableRow } from './styles/StyledTableRow.styled';
import { TableDataWrapper } from './styles/TableDataWrapper.styled';

export default function TableRow() {
  const users = useSelector(state => state.userReducer.users)
  const { isLoading, isDeleting } = useSelector(state => state.userReducer)
  const dispatch = useDispatch()
  const [isEdit, setIsEdit] = useState(false)
  // const [editedValues, setEditedValues] = useState()
  // TODO !!!
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const onEdit = useCallback(() => {
    setIsEdit(!isEdit)
  }, [isEdit])

  // TODO !!!
  // const onEditHandler = (userId) => {

  // }

  const getBgColor = useMemo(() => {
    return isEdit ? '#63d6f5' : '#63f58c'
  }, [isEdit])

  const getBtnTitle = useMemo(() => {
    return isEdit ? 'Save' : 'Edit'
  }, [isEdit])

  return (
    <section>
      {(isLoading || isDeleting) && <Loader />}
      {!users.length && <h3>No users in the list</h3>}
      {users && (
        users.map(({ id, name, age, about_person }) =>
          <StyledTableRow key={id}>
            <TableDataWrapper>
              {!isEdit ? (
                <>
                  <div>{id}</div>
                  <div>{name}</div>
                  <div>{age}</div>
                  <div>{about_person}</div>
                </>
              ) : (
                <>
                  <input defaultValue={id} disabled />
                  <input defaultValue={name} />
                  <input defaultValue={age} />
                  <input defaultValue={about_person} />
                </>
              )}
            </TableDataWrapper>
            <ButtonWrapper>
              <Button onClick={onEdit} bg={getBgColor} color='#9d9898'>{getBtnTitle}</Button>
              <Button onClick={() => dispatch(deleteUser(id))} disabled={isDeleting} bg='#f56363' color='#fff'>Delete</Button>
            </ButtonWrapper>
          </StyledTableRow>
        )
      )}
    </section >
  )
}