import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/Home.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar } from 'react-bootstrap';
import "./components/style.css"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Navbar bg="dark" sticky="top" data-bs-theme="dark" style={{marginBottom: "20px", borderBottom: "1px solid #00adb5"}}> 
      <Container> 
        <Navbar.Brand style={{color: "#eeeeee"}}>
          Daniel Krsticevic
        </Navbar.Brand>
      </Container>
    </Navbar>
    <App />
  </React.StrictMode>,
)
