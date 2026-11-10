import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Home from './pages/home.jsx'
import Header from './common/header.jsx'
import Footer from './common/footer.jsx'
import "./pages/home.css"

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Header />
        <Home />
        <Footer />
    </StrictMode>
)