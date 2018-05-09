import React, { Component } from 'react';

import {
  LandingBanner,
  Questionnaire
} from '../'

class LandingPage extends Component {
  render() {
    return (
      <div>
        <LandingBanner title={ 'CA Driving Tests' } description={ 'CA State Practice Written Tests' } />
        <div className="container">
          <div className="width">
            <Questionnaire />
          </div>
        </div>
      </div>
    )
  }
}

export default LandingPage
