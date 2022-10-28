import s from "./Filter.module.css"

import PropTypes from 'prop-types';

function Filter({ titel }) {
  return (
    <div className={s["heder"]}>
      <h2 className={s["titel"]}>{titel}</h2>
      <input className={s["input"]}></input>
    </div>
  );
}

Filter.propTypes = {
  titel: PropTypes.string.isRequired,
};
export default Filter;
