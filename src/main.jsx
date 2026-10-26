import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'

import B_class_component_state from '../src/components/B_class_component_state.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < B_class_component_state />
  </StrictMode>
  
)
