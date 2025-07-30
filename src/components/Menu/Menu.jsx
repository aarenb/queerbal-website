// import './App.css'
import Navigation from "../Navigation/Navigation"
import Footer from "../Footer/Footer"

function Menu() {

  return (
    <>
    <Navigation></Navigation>
      <img id="hangingDecorations" src="hangingDecorations.png"></img>
      <div id="main">
        <h1>Meny</h1>
        <h2 class="h2Marg"> Huvudrätt</h2>
        <p> Inbakad svartrot med aubergine & citrontimjan - brynt sås på hösttomater & karamelliserad lök - terrin på rotsaker från Solmarka gård & lagrad öländsk ost - örtglaserade brytbönor - picklad blomkål </p>

        <h2 class="h2Marg"> Efterrätt </h2>
        <p class="spaceDown"> Inbakad svartrot med aubergine & citrontimjan - brynt sås på hösttomater & karamelliserad lök - terrin på rotsaker från Solmarka gård & lagrad öländsk ost - örtglaserade brytbönor - picklad blomkål </p>
        <hr width="100%" class="spaceDown"/>
        <p class="spaceDown"> Samtlig mat är vegetarisk, vid specialkost fyller man i det i samband med biljettköp. Queerbalen är ett 100% alkoholfritt evenemang, och det kommer därför enbart serveras alkoholfri dryck.</p>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Menu
