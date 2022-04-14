import React from 'react'
import plan from '../assets/plan.jpg'

const Plan = () => {
  return (
    <section>
        <div className='plan'>
            <h1> Start your Journey with us... </h1>
            <p>Go on a business trip with us</p>

            <img src={plan} alt ='plan with us'/>

            <button type='submit'> Check Our Plans For You</button>

        </div>

    </section>
  )
}

export default Plan