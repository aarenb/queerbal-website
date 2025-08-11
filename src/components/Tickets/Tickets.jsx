// import './App.css'
import Navigation from "../Navigation/Navigation"
import Footer from "../Footer/Footer"

function Tickets() {

  return (
    <>
    <Navigation></Navigation>
      <img id="hangingDecorations" src="hangingDecorations.png"></img>
      <div id="main">
        <h1>Biljetter</h1>
        <p> Boka din biljett genom att fylla i <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSeL3ZaaxH8XpUyvz0fSS5q6cwjbnAwn_MvsROHlo37n_lLVuA/viewform?usp=header">detta formuläret</a></p>
        <div id="prices">
        <h2> Priser </h2>
        <p> Medlemmar i <a target="_blank" href="https://blimedlem.rfslungdom.se/">RFSL Ungdom Kalmar</a> eller <a target="_blank" href="https://blimedlem.rfsl.se">RFSL Kalmar Län</a>: 250kr</p>
        <p> Icke medlemmar: 350kr</p>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Tickets
