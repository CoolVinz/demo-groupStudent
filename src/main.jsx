import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Students from './student'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Students num={27} numOfStdGroup={4}/>
    
  </React.StrictMode>
)

// id='4' name='Charmander' type='fire' exp='62'