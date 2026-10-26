import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import A_SimpleCalculator from './2.functional-components/A_SimpleCalculator.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <A_SimpleCalculator />
  </StrictMode>
)
