import PropTypes from "prop-types";
import TransactionHistory from "../TransactionHistory";
import style from "./TransactionList.module.css";

const TransactionList = ({ transactions }) => {
  return (
    <table className={style.table}>
      <thead className={style.thead}>
        <tr className={style.title}>
          <th className={style.text}>Type</th>
          <th className={style.text}>Amount</th>
          <th className={style.text}>Currency</th>
        </tr>
      </thead>
      <tbody className={style.tbody}>
        {transactions.map((transaction) => (
          <TransactionHistory key={transaction.id} transaction={transaction} />
        ))}
      </tbody>
    </table>
  );
};

TransactionList.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
export default TransactionList;
