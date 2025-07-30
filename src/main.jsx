import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Tickets from './components/Tickets/Tickets.jsx'
import Menu from './components/Menu/Menu.jsx'
import Schedule from './components/Schedule/Schedule.jsx'
import Accessibility from './components/Accessibility/Accessibility.jsx'
import Sponsors from './components/Sponsors/Sponsors.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}> </Route>
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/sponsors" element={<Sponsors />} />
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
  </StrictMode>,
)
