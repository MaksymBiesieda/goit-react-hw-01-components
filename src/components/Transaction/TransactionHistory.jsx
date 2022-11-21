import PropTypes from 'prop-types';
import { Table, TableHead, TableRow, TableHeadData, TableData } from './Transaction.styled';

export default function TransactionHistory({ items }) {
   return (<Table>
  <TableHead>
    <TableRow>
      <TableHeadData>Type</TableHeadData>
      <TableHeadData>Amount</TableHeadData>
      <TableHeadData>Currency</TableHeadData>
    </TableRow>
  </TableHead>

        <tbody>
           {items.map(({id, type, amount, currency}) => {
               return <TableRow key={id}>
               <TableData>{type}</TableData>
               <TableData>{amount}</TableData>
               <TableData>{currency}</TableData>
             </TableRow>})}
    
        </tbody>
</Table>) 
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }),),
}