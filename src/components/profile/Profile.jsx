import PropTypes from "prop-types";
import style from "./Profile.module.css";

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className={style.profile}>
      <div className={style.description}>
        <img src={avatar} alt={name} className={style.userImg} />
        <p className={style.name}>{name}</p>
        <p className={style.tag}>{tag}</p>
        <p className={style.location}>{location}</p>
      </div>
      <ul className={style.list}>
        {Object.entries(stats).map(([key, value]) => (
          <li className={style.stats} key={key}>
            <span className={style.label}>{key}</span>
            <span className={style.quantity}>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }).isRequired,
};
export default Profile;
