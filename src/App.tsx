
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';


export default function App() :JSX.Element {

  const [ data, setData ] = useState<string>('');

  function handleClick():void {
    fetch(`/api${window.location.search}`).then(res => res.text()).then(res => setData(res));
    console.log('You clicked me');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={handleClick}>请求Serverless</button>
        请求来的数据 ： { data }
      </header>
    </div>
  );
}

