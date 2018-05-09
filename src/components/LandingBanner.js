import React from 'react';

const LandingBanner = (props) => {
  return (
    <section id="landing-banner" className="center">
      <div className="callout">
        <h1>{ props.title }</h1>
        <h4>{ props.description }</h4>
        <h2>{ props.subDescription }</h2>
      </div>
    </section>
  )
}

export default LandingBanner;
