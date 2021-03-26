import React from 'react'
import { useHistory } from 'react-router-dom';

export default function Home() {

  const history = useHistory();

  const routeToPizza = () => {
    // react router version of the history api
    // for example, we could navigate to different places,
    // after checking auth status (make sure user has permissions to be in that part of our app)
    history.push('/pizza');
  }
  return(
    <section className='home-wrapper'>
      <h2 id='home-heading'>Your favorite food delivered while coding</h2>
      <button
        onClick={routeToPizza}
        id='pizza-button'
      >
        Pizza?
      </button>
    </section>
  )
}