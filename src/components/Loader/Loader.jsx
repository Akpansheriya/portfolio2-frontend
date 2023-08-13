import React from 'react'
import "./Loader.scss"
function Loader() {
  return (
    <div>
        <div className='splash'>
        <img  referrerpolicy="no-referrer" src='../assets/blackbull12.png' alt='splash-screen' />
        <div className="bouncing-loader">
  <div></div>
  <div></div>
  <div></div>
</div>
        </div>
    </div>
  )
}

export default Loader