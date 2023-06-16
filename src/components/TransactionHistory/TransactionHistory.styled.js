import styled from 'styled-components';

export const TableRow = styled.td`
padding: 8px 16px;
text-align: left;
/* border: solid #f1f1f1; */
margin: 0;
`

export const Table = styled.table`
margin: 0 auto;
`

export const Row = styled.tr`
background-color: ${(props) => props.id % 2 !== 0? "#f1f1f1":"white"};
`