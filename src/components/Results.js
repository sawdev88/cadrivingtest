import React from 'react';

const Results = (props) => {
  return (
    <div id="results" className={ props.showResults ? 'show' : 'hide' }>
      <h3>Results</h3>
      <h4>{props.correctAnswers} / {props.totalQuestions}</h4>
      <h6 className="action-btn red" onClick={ props.onRetry }>RETRY</h6>
      <h6 className="action-btn blue" onClick={ props.onClose }>CLOSE</h6>
    </div>

  )
}

export default Results;
