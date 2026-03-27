import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/index.css"
import Footer from './components/pages/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <main id="main-content">
        <App />
      </main>
      <Footer />
    </div>
  </React.StrictMode>,
)
