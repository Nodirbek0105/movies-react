import React from 'react'
import ReactDOM from 'react-dom/client'
import "./bootstrapt.css"

import './index.scss'
// import Modal from './components/modal/modal'
import Movies from './components/movies/movies'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Modal /> */}
      <Movies />
  </React.StrictMode>,
)
