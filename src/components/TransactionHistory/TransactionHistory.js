import PropTypes from 'prop-types';

import css from "./TransactionHistory.module.css"



export default function TransactionHistory({items}) {
    return (
        <table className={css.table}>
  <thead className={css.title}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

            <tbody>
                {items.map(({ id, type, amount, currency }) =>
                    <tr key={id}>
                        <td>{type}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
                    </tr>)}
            </tbody>
</table>
    )
}

TransactionHistory.prototype = {
    items : PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.number.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ),
}
