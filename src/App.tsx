import React from 'react'
import './App.css'
import Router from './router'
import '@/assets/styles/index.scss'

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <Router></Router>
    </div>
  )
}

export default App
