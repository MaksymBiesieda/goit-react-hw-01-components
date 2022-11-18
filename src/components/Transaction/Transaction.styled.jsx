import styled from '@emotion/styled';

export const Table = styled.table`
width: 900px;
background-color: ${props => props.theme.colors.backgroundColor};
margin: 30px auto;
text-align: center;
border-collapse: collapse;
`;

export const TableHead = styled.thead`
background-color: rgb(35, 116, 182);
color:${props => props.theme.colors.secondaryTextColor};
`;

export const TableRow = styled.tr`
&:nth-child(even) {background-color: rgb(200, 200, 200);}
`;

export const TableHeadData = styled.th`
padding: 20px;
text-transform: uppercase;
font-size: 20px;
width: 300px;
border: 1px solid  rgb(236, 223, 223);
`;

export const TableData = styled.td`
padding: 20px;
width: 300px;
color: ${props => props.theme.colors.primaryTextColor};
font-size: 20px;
text-transform: capitalize;
border: 1px solid #212121;
`;