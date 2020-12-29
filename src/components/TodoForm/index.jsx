import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
  onSubmit: null,
};

function TodoForm(props) {
  const { onSubmit } = props;
  const [value, setValue] = useState('');

  const handleValueChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  const handleOnSubmit = (e) => {
    // Prevent reloading browser
    e.preventDefault();
    if(!onSubmit) return;

    const formValues = {
      title: value,
    }
    onSubmit(formValues);
    // Reset form (sau khi nhap thong tin vao thi se de trong phan nhap du lieu)
    setValue('');
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input 
        type="text" 
        value={value} 
        onChange={handleValueChange} 
      />
    </form>
  );
}

export default TodoForm;