import PropTypes from "prop-types";
import style from "./TransactionHistory.module.css";
const TransactionHistory = ({ transaction }) => {
  return (
    <>
      <tr>
        <td className={style.list}>{transaction.type}</td>
        <td className={style.list}>{transaction.amount}</td>
        <td className={style.list}>{transaction.currency}</td>
      </tr>
    </>
  );
};

TransactionHistory.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
}.isRequired;

export default TransactionHistory;
