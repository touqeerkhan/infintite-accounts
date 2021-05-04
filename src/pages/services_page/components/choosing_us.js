import React from 'react';

export function ChoosingUs() {
  return(
      <div className={'choosingUs-area'}>
         <div className={'row p-5 choosing-row-data m-0'}>
          <div className={'col-lg-6 col-12'}>
              <img src={'./images/choosing_logo.svg'} className={'img-fluid'}/>
          </div>
             <div className={'col-lg-6 col-12 align-self-center'}>
                 <h1>WHY CHOOSING US</h1>
                 <p>We have a goal, to be at the forefront of the new digital revolution, embracing technology and encouraging all of our clients to use cloud software.</p>
                 <button className={'btn btn-services mt-5'}>Find Out More</button>
             </div>
         </div>
      </div>
  )
}