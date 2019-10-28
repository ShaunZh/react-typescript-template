import React from 'react'
import './App.css'
import Router from 'router'
// import { Button } from 'antd';
import { Button, WhiteSpace, WingBlank } from 'antd-mobile'
import Hello from '@containers/Hello'

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <Router></Router>
    </div>
  )
}

export default App
