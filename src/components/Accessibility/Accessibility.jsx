// import './App.css'
import Navigation from "../Navigation/Navigation"
import Footer from "../Footer/Footer"

function Accessibility() {

  return (
    <>
    <Navigation></Navigation>
      <img id="hangingDecorations" src="hangingDecorations.png"></img>
      <div id="main">
        <h1>Tillgänglighet</h1>
        <div id="tillgänglighet">
          <p> HISS: Det finns hiss vid restauranges entre, och även en inne som tar dig mellan bottenvåningen (där vi har middagen) och första våningen med bland annat dansgolvet. </p>
          <p> TOALETTER: Det finns både vanliga och handikappsanpassade toaletter inne i lokalen, på bottenvåningen. Samtliga toaletter är självklart könsneutrala. </p>
          <p> LJUDNIVÅER: Det kommer att spelas hög musik, framförallt på dansgolvet efter middagen. Då kommer det vara möjligt att gå ner till den aningen tystare bottenvåningen och spela brädspel där vi tidigare åt middag, för de som önskar. Det går självklart även bra att gå ut en stund vid behov. </p>
          <p> ÖVRIGT: Vid övriga frågor om tillgänglighet kan ni kontakta oss på mejl (kalmar@rfslungdom.se) eller på instagram: @rfslungdomkalmar</p>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Accessibility
