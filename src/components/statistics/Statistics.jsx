import PropTypes from "prop-types";
import getRandomColor from "./getRandomColor";
import style from "./Statistics.module.css";

const Statistics = ({ title, stats }) => {
  return (
    <section
      className={style.statistics}
      style={{ backgroundColor: getRandomColor() }}
    >
      {title && (
        <h2
          className={style.title}
          style={{ backgroundColor: getRandomColor() }}
        >
          {title}
        </h2>
      )}
      <ul className={style.list}>
        {stats.map((item) => (
          <li className={style.item} key={item.id}>
            <span className={style.label}>{item.label}</span>
            <span className={style.percentage}>{item.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};
export default Statistics;

//  ========= вставить
