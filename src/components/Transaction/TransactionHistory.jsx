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
           {items.map((item) => {
               return <TableRow key={item.id}>
               <TableData>{item.type}</TableData>
               <TableData>{item.amount}</TableData>
               <TableData>{item.currency}</TableData>
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