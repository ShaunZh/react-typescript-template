import React from 'react'
import logo from './logo.svg'
import './App.css'
// import { Button } from 'antd';
import { Button, WhiteSpace, WingBlank } from 'antd-mobile'

const App: React.FC = () => {
  let a = 'adff'
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <WingBlank>
          <Button>default</Button>
          <WhiteSpace />

          <Button disabled>default disabled</Button>
          <WhiteSpace />

          <Button type="primary">primary</Button>
          <WhiteSpace />
        </WingBlank>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
