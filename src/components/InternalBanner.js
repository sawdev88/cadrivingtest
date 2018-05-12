import React from 'react';

import {
  Nav
} from '../components/'

const InternalBanner = (props) => {
  return (
    <section id="internal-banner" className="center">
      <div className="callout">
        <h1>{ props.title }</h1>
        <h4>{ props.description }</h4>
        { Nav }
      </div>
    </section>
  )
}

export default InternalBanner;
