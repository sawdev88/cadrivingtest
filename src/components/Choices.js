import React from 'react';

function handleClick(e) {
  e.preventDefault();

  e.target.parentElement.querySelectorAll( ".active" ).forEach( e =>
    e.classList.remove( "active" )
  );

  e.target.classList.add( "active" );
}

const Choices = (props) => {
  const questionList = props.arr.map((item, index) => {
    return (
      <li
        onClick= { (e) => handleClick(e) }
        key= { index }
        value= { index }
        answer= { props.answer }>
        { item }
      </li>
    )
  })

  return (
    <div>
      <ul className="question-callout">
        <div className="grade"></div>
        { questionList }
      </ul>
    </div>
  )
}

export default Choices;
