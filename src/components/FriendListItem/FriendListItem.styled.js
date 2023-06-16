import styled from 'styled-components';

  export const List = styled.li`
  display: flex;
  gap: 10px;
  padding: 10px;
  flex-direction: row;
  background-color: #c1c1c1;
  width: 250px;
  border:2px solid #646363;
  border-radius: 15px;
`

export const Status = styled.span`
height: 10px;
width: 10px;
border-radius: 50px;
align-self: center;
background-color: ${(props) => props.isOnline ? "red" : "green"};
`
