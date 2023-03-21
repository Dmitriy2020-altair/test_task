import { StyledTableHeader } from "./styles/StyledTableHeader.styled";

export default function TableHeader() {
  return (
    <>
      <h3 style={{textAlign: 'center'}}>click on any value in the table to sort</h3>
      <StyledTableHeader>
        <div>id</div>
        <div>Name</div>
        <div>Age</div>
        <div>About Person</div>
      </StyledTableHeader>

    </>
  )
}
