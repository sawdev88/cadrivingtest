import React from 'react';
import { Link } from 'react-router-dom';

const LandingBanner = (props) => {
  const pageList = (
    <ul>
      <li><Link to='/test-1'>Practice Test #1</Link></li>
    </ul>
  )

  return (
    <section id="landing-banner" className="center">
      <div className="callout">
        <h1>{ props.title }</h1>
        <h4>{ props.description }</h4>
        { pageList }
      </div>
    </section>
  )
}

export default LandingBanner;
