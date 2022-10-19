import React from 'react';

const Checkbox = (props) => {
  const inputRef = React.useRef(null);

  const onChange = () => {
    if (props.onChange) {
      props.onChange(inputRef.current);
    }
  };

  return (
    <div class='tile'>
      <input
        ref={inputRef}
        type='checkbox'
        id={props.identitas}
        onChange={onChange}
        checked={props.checked}
      />
      <label for={props.identitas}>
        <span>{props.nama}</span>
      </label>
    </div>
  );
};

export default Checkbox;
