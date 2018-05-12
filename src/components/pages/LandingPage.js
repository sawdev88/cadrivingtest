import React, { Component } from 'react';

import {
  Question,
  LandingBanner,
  Questionnaire,
  Button,
  Results
} from '../'

import test1 from '../../tests/test1'

class LandingPage extends Component {
  constructor(props) {
    super(props)

    this.state = this.getInitialState();
    this.gradeQuiz = this.gradeQuiz.bind(this)
  }

  componentDidMount() {
    this.setState({
      totalQuestions: document.querySelectorAll('.question-callout').length
    })
  }

  getInitialState = () => {
    const initialState = {
        testSubmitted: false,
        totalAnswered: 0,
        correctAnswers: 0,
        showResults: false
     };
    return initialState;
  }

  resetState = () => {
    this.setState(this.getInitialState());
    let activeList = document.getElementsByTagName('LI');

    for (var i = 0; i < activeList.length; i++) {
      activeList[i].classList.remove('active');
    }

    let gradeList = document.getElementsByTagName('UL');
    for (var i = 0; i < gradeList.length; i++) {
      gradeList[i].classList.remove('correct', 'wrong');
    }

  }

  gradeQuiz() {
    let questions = document.querySelectorAll('.question-callout'),
        selectedAnswers = document.querySelectorAll('.active'),
        correctAnswers = 0;

    if (this.state.totalQuestions === selectedAnswers.length) {
      selectedAnswers.forEach((value, index) => {
        //console.log(value);
        if (value.getAttribute('value') === value.getAttribute('answer')) {
          value.parentNode.classList = 'correct'
          correctAnswers++;
        } else {
          value.parentNode.classList = 'wrong'
        }
      })
    } else {
      alert('questions missed')
    }

    this.setState({
      totalAnswered: selectedAnswers.length,
      testSubmitted: true,
      correctAnswers: correctAnswers,
      showResults: true
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
        <Results
          totalQuestions={ this.state.totalQuestions }
          correctAnswers={ this.state.correctAnswers }
          showResults={ this.state.showResults }
          onClose={ () => this.setState({ showResults: !this.state.showResults }) }
          onRetry={ () => this.resetState() }
          />
      </div>
    )
  }
}

export default LandingPage
