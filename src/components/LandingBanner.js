import React from 'react';
import { Link } from 'react-router-dom';

import {
  Nav
} from './'

const LandingBanner = (props) => {
  return (
    <section id="landing-banner" className="center">
      <div className="callout">
        <h1>{ props.title }</h1>
        <h4>{ props.description }</h4>
        <Nav quizTitle={ 'Select a Quiz:' } />
      </div>
    </section>
  )
}

export default LandingBanner;
