import React from 'react'
{/* <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script> */}
export  const PortalComponent = () => {
  return (
    <div class="container">
      <div class="card">
        <div class="card_img"><img src="Earth.png" width="300"height="300" /></div>
        <h4>Earth</h4>
        <h6>Sol/earth</h6>
        <p>Earth is the third planet from the Sun and the home-world of humanity.</p>
        <div class="icons">
          <div class='icon1'>
            <i class='fas fa-star'></i>
            {/* <div id="onhover">Stars</div> */}
            
          </div>
           <div class='icon1'>
            <i class='fas fa-exclamation-circle'></i>
          </div>
           <div class='icon1'>
            <i class='fas fa-paper-plane'></i>
          </div>
        </div>
        <div class="numbers">
            85 58 38
        </div>
        <a href="">CONTRIBUTE</a>
      </div>
      <div class="card">
        <div class="card_img"><img src="Mars.png" width="300"height="300"/></div>
        <h4>Mars</h4>
        <h6>Mars/mars</h6>
        <p>Mars can easily be seen from Earth with the naked eye, as can its reddish coloring.</p>
        <div class="icons">
          <div class='icon1'>
            <i class='fas fa-star'></i>
            {/* <span>Stars</span> */}
          </div>
           <div class='icon1'>
            <i class='fas fa-exclamation-circle'></i>
          </div>
           <div class='icon1'>
            <i class='fas fa-paper-plane'></i>
          </div>
        </div>
         <div class="numbers">
            56 10 33
        </div>
        <a href="">CONTRIBUTE</a>
      </div>
      <div class="card">
        <div class="card_img"><img src="Ceres.png" width="300"height="300"/></div>
        <h4>Ceres</h4>
        <h6>Belt/ceres</h6>
        <p>Ceres is the largest object in the main asteroid belt that lies between the orbits of Mars and Jupiter.</p>
        <div class="icons">
          <div class='icon1'>
            <i class='fas fa-star'></i>
          </div>
           <div class='icon2'>
            <i class='fas fa-exclamation-circle'></i>
          </div>
           <div class='icon3'>
            <i class='fas fa-paper-plane'></i>
          </div>
        </div>
         <div class="numbers">
            30 157 20
        </div>
        <a href="">CONTRIBUTE</a>
      </div>
    </div>
  )
}

export default PortalComponent