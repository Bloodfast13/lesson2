import React from 'react';
import CounterWithProps from './components/counterWithProps'
import './App.css';

interface State {
  value: number,
  text: string
}


const App: React.FC = () => {
  const [counter, setCounter] = React.useState(0)
  const [isShowed, setIsShowed] = React.useState(false)
  return (
    <div className="App">
      <button title={isShowed ? 'Hide' : 'Show'} onClick={() => setIsShowed(!isShowed)}>{isShowed ? 'Show' : 'Hide'}</button>
      <header className="App-header">
      {isShowed && (
      <div>
        <p>()-----------()</p>
        <p>       ||</p>
        <p>_______________</p>
        </div>)}
        <CounterWithProps counter={counter} />
      </header>
      {/* <button onClick={() => {
        setList([...list, Math.random()])
      }}>click</button> */}
    </div>
  );
}

export default App;
