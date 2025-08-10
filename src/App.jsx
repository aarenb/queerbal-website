import './App.css'
import Navigation from './components/Navigation/Navigation.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {

  return (
    <>
    <Navigation></Navigation>
      <img id="hangingDecorations" src="hangingDecorations.png"></img>
      <div id="main">
        <h1>Queerbalen 2025</h1>
        <h2> 11 Oktober - Kalmar Slott </h2>
        <p> En magisk kväll på Kalmar slott i höst för HBTQIA+ personer, arrangerad av RFSL Ungdom Kalmar, RFSL Kalmar Län & NBV Sydost </p>

        <hr width="100%"/>

        <p> Många queerpersoner känner inte att de kan vara sig själva på t.ex sin skolbal, och vi vill därför ge queerpersoner i Kalmar denna möjlighet. HBTQIA+ personer är en väldigt utsatt grupp som inte alltid blir representerade i övriga arrangemang. Vi vill kunna lyfta upp dem och skapa en magisk kväll där HBTQIA+ personer står i centrum, där de kan känna sig trygga och ha roligt. Under evenemanget kommer även tillgänglighet vara en faktor som står i centrum, med fokus på folk med funktionsnedsättningar. Våra förhoppningar är att kvällen kan få HBTQIA+ personer att bli hoppfulla inför en framtid med mer gemenskap och trygghet. Vi vill även påminna om att HBTQIA+ personer existerar och är viktiga året om, inte bara under Pride. </p>
        <div id="castlePics">
          <img src="KalmarSlott1.jpg"/>
          <img height="400px"src="KalmarSlott2.jpg"/>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
