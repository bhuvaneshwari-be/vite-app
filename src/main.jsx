import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'

import Expressions from "../src/pages/c_expressions/Expressions.jsx"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    < Expressions />
  </StrictMode>
  
)
