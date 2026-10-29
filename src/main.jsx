import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import A_TrainReservation from './ternary_operator/A_TrainReservation.jsx'

createRoot(document.getElementById('root')).render(
  <div>
    <A_TrainReservation/>
  </div>
)
