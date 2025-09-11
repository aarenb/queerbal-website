// import './App.css'
import Navigation from "../Navigation/Navigation"
import Footer from "../Footer/Footer"

function Schedule() {

  return (
    <>
    <Navigation></Navigation>
      <img id="hangingDecorations" src="hangingDecorations.png"></img>
      <div id="main">
        <h1>Schema</h1>
        <p>18:00 | Balen öppnar</p>
        <p>19:00 - 21:00 | Middag med live musik (Band: Killers of Silence) & andra aktiviteter </p>
        <p>21:00 - 02:00 | Dans och brädspel </p>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Schedule
