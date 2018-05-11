import React, { Component } from 'react';

import {
  Question,
  LandingBanner,
  Questionnaire,
  Button
} from '../'

import test1 from '../../tests/test1'

class LandingPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      testSubmitted: false,
      totalAnswered: 0,
      totalQuestions: 0
    }

    this.gradeQuiz = this.gradeQuiz.bind(this)
  }

  componentDidMount() {
    this.setState({
      totalQuestions: document.querySelectorAll('.question-callout').length
    })
  }

  gradeQuiz() {
    let questions = document.querySelectorAll('.question-callout');
    let selectedAnswers = document.querySelectorAll('.active');

    this.setState({
      totalAnswered: selectedAnswers.length
    })

    if (this.state.totalQuestions === selectedAnswers.length) {
      selectedAnswers.forEach((value, index) => {
        //console.log(value);
        if (value.getAttribute('value') === value.getAttribute('answer')) {
          value.parentNode.classList = 'correct'
        } else {
          value.parentNode.classList = 'wrong'
        }
      })
    } else {
      alert('questions missed')
    }

    questions.forEach((value, i) => {
      // value.childNodes.forEach((child) => {
      //   console.log(child);
      // })
    })
  }

  render() {
    return (
      <div>
        <LandingBanner title={ 'CA Driving Tests' } description={ 'CA State Practice Written Tests' } />
        <div className="container">
          <div className="width">
            {test1.map((item, index) => {
              return (
                <div>
                  <Questionnaire
                    testSubmitted = { testSubmitted => testSubmitted(testSubmitted) }
                    title={ item.question }
                    answer={ item.answer }
                    arr={ item.choices } />
                </div>
              )
            })}
            <Button title="Submit" onClick={ () => this.gradeQuiz } />
            total: { this.state.totalAnswered } / { this.state.totalQuestions }
          </div>
        </div>
      </div>
    )
  }
}

export default LandingPage
