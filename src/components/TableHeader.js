import styled from "styled-components";
import { StyledTableHeader } from "./styles/StyledTableHeader.styled";

const TableDescription = styled.h3`
  text-align: center;
`

export default function TableHeader() {
  return (
    <>
      <TableDescription>click on any value in the table to sort</TableDescription>
      <StyledTableHeader>
        <div>id</div>
        <div>Name</div>
        <div>Age</div>
        <div>About Person</div>
      </StyledTableHeader>

    </>
  )
}
