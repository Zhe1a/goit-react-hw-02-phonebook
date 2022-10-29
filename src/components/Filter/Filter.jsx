import s from './Filter.module.css';

import PropTypes from 'prop-types';

function Filter({ filter }) {
  return (
    <div className={s['heder']}>
      <input
        className={s['input']}
        onChange={e => {
          filter(e);
        }}
      ></input>
    </div>
  );
}

Filter.propTypes = {};
export default Filter;
