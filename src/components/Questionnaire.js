import React from 'react';

import test1 from '../tests/test1'

const Questionnaire = (props) => {
  return (
    <section>
      {test1.map((item, index) => {
        return (
          <div key={`${item}-${index}`}>
            <h3>{item.question}</h3>
              <ul>
                {item.choices.map((choice, i) => {
                  return (
                    <li>
                      <input type="radio" name={`choice_${index}`} id={`choice_${index}_answer_${i}`} defaultChecked={false} value={i} />
                        {' '}
                      <label htmlFor={`choice_${index}_answer_${i}`}>{choice}</label>
                    </li>
                  )
                })}
              </ul>
          </div>
        )
      })}
    </section>
  )
}

export default Questionnaire;
