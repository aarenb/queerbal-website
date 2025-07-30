import './Navigation.css'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <>
    <nav>
        <Link to='/'> Startsida </Link>
        <Link to='/tickets'> Biljetter </Link>
        <Link to='/menu'> Meny </Link>
        <Link to='/schedule'> Schema </Link>
        <Link to='/accessibility'> Tillgänglighet </Link>
        <Link to='/sponsors'> Sponsorer </Link>
    </nav>
    </>
  )
}

export default Navigation