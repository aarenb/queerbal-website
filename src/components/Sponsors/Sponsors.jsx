// import './App.css'
import Navigation from "../Navigation/Navigation"
import Footer from "../Footer/Footer"

function Sponsors() {

  return (
    <>
    <Navigation></Navigation>
      <img id="hangingDecorations" src="hangingDecorations.png"></img>
      <div id="main">
        <h1>Sponsorer</h1>
        <div id="sponsorsDiv">
          <img class="sponsorImg" src="301174098_129808743118829_3451087187308102479_n.png" />
          <img class="sponsorImg" src="epiroc-logo-vector.png" />
          <img class="sponsorImg" src="HBT-S_Ros_utan_skugga_CMYK_30x30cm.png" />
          <img class="sponsorImg" src="Kalmar_kommun_vanster_RGB.png" />
          <img class="sponsorImg" src="kalmarhem_logo_2019_transparent.png" />
          <img class="sponsorImg" src="logo.webp" />
          <img class="sponsorImg" src="sodra-logo-green-rgb.png" />
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Sponsors
