import PropTypes from "prop-types";
import style from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li className={style.item} key={id}>
      <span
        className={style.status}
        style={{ backgroundColor: isOnline ? "red" : "green" }}
      >
        {isOnline}
      </span>
      <img className={style.avatar} src={avatar} alt="" width="48" />
      <p className={style.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
export default FriendListItem;
