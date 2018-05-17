import React from 'react';
import { Link } from 'react-router-dom';

function toggleSelect(e) {
  e.target.parentNode.classList.toggle('showing');
}

const Nav = (props) => {
  return (
    <ul className="select" onClick={ (e) => toggleSelect(e) }>
      <li>{ props.quizTitle }</li>
      <ul className="dropdown">
        <li><Link to='/test-1'>Practice Test #1</Link></li>
        <li><Link to='/test-2'>Practice Test #2</Link></li>
        <li><Link to='/test-3'>Practice Test #3</Link></li>
        <li><Link to='/test-4'>Practice Test #4</Link></li>
      </ul>
    </ul>
  )
}

export default Nav;
