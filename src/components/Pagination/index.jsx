import React from 'react';
import PropTypes from 'prop-types';

Pagination.propTypes = {
  pagination: PropTypes.object.isRequired,
  pageOnChange: PropTypes.func,
};

Pagination.defaultProps = {
  pageOnChange: null,
};

function Pagination(props) {
  const { pagination, onPageChange } = props;
  const { _page, _limit, _totalRows} = pagination;

  const totalPages = Math.ceil(_totalRows / _limit);
  // Math.ceil de lam tron so, vi du nhu 51 / 10 = 5.1 thi Math.ceil len 6, chuyen san pham thu 51 qua trang thu 6

  const handlePageChange = (newPage) => {
    if(onPageChange) {
      onPageChange(newPage);
    }
  };
  // if(onPageChange) de kiem tra component cha co truyen onPageChange xuong thang con khong moi chay code

  return (
    <div>
      <button
        disabled={ _page <= 1}
        onClick={() => handlePageChange(_page - 1)}
      >
        Prev
      </button>
      <button
        disabled={ _page >= totalPages}
        onClick={() => handlePageChange(_page + 1)}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;