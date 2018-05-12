import React, { Component } from 'react';

import {
  LandingBanner,
} from '../'


const LandingPage = (props) => {
  return (
    <section>
      <LandingBanner title={ 'CA Driving Tests' } description={ 'CA State Practice Written Tests' } pageList={ true } />
    </section>
  )
}

export default LandingPage
