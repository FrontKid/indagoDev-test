import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApiProvider } from '@reduxjs/toolkit/query/react'

import { pokemonApi } from './api/pokemonApi'

import { App } from './App.tsx'

import './scss/index.scss'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApiProvider api={pokemonApi}>
      <App />
    </ApiProvider>
  </React.StrictMode>,
)
