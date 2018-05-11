import React, { Component } from 'react';

import {
  Question,
  Choices,
} from './'

const Questionnaire = (props) => {
  return (
    <div className="questionnaire-callout">
      <Question title={ props.title } />
      <Choices arr= { props.arr } answer= { props.answer } />
    </div>
  )
}

export default Questionnaire;
