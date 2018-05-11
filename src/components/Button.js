import React from 'react';

const Button = (props) => {
  return (
    <button onClick={ props.onClick() } className="btn">
      {props.title}
    </button>
  )
}

export default Button
