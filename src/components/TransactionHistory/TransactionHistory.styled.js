import styled from 'styled-components';

export const TableRow = styled.td`
padding: 8px 32px;
text-align: left;
`

export const Table = styled.table`
margin: 0 auto;
`

export const Row = styled.tr`
background-color: ${(props) => props.id % 2 !== 0? "#f1f1f1":"white"};
`

export const Head = styled.th`
background-color: #BB2649;
color: #ffffff;
padding: 8px 32px;
`