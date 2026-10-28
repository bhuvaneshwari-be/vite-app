import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'

import C_SimpleForm from './events/task/C_SimpleForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < C_SimpleForm />
  </StrictMode>
  
)
