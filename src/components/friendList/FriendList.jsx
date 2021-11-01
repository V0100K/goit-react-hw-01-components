import PropTypes from "prop-types";
import FriendListItem from "./friendListItem/FriendListItem";
import friends from "../../data/friends.json";
import style from "./FriendList.module.css";

const FriendList = () => {
  const friendsList = friends.map((item) => (
    <FriendListItem key={item.id} {...item} />
  ));
  return <ul className={style.list}>{friendsList}</ul>;
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
export default FriendList;
