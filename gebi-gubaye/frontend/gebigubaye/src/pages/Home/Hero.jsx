import React from 'react'

import '../Home/home.css'
function Hero() {
  return (
      <div className="hero-section">
          <div className='description'
          ><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem incidunt, nesciunt explicabo, veritatis aperiam itaque illum cum sint pariatur adipisci odio voluptates nemo architecto sed facilis aspernatur iste rerum tempora.</p>
          </div>
          <div className='buttons'>                 <div>
              <button className='button'>Login</button>
          </div>
          <div>
              <button className='button' >Sign up</button>
              <button className='button'>hi alzo</button>
               <input className='button' type='text' placeholder='it only for alzo .....'/>
              </div>
          </div>
          <input className='button' type='text' placeholder='it only for alzo .....'/>
          
    </div>
  )
}

export default Hero
