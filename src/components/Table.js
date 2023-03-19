import { StyledTable } from "./styles/StyledTable.styled";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

export default function Table() {
  
  return (
    <StyledTable>
      <TableHeader />
      <TableRow/>
    </StyledTable>
  )
}