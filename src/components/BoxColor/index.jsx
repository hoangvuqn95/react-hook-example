import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './BoxColor.scss';

BoxColor.propTypes = {
  boxColor: PropTypes.array,
  handleOnClick: PropTypes.func,
};

BoxColor.defaultProps = {
  boxColor: [],
  handleOnClick: null,
};

const COLOR_LIST = ['tomato', 'yellow', 'silver', 'teal', 'lightgreen']

function BoxColor(props) {
  const [idx, setIdx] = useState(0);

  const handleOnClick = (x) => {
    setIdx(x => (x + 1) % COLOR_LIST.length);
  };

  return (
    <div className="box-color" onClick={handleOnClick} style={{backgroundColor: COLOR_LIST[idx]}}>
      {COLOR_LIST[idx]}
    </div>
  );
}

export default BoxColor;