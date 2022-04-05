
import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

export default function App() :JSX.Element {
    let url: string = process.env.NODE_ENV === 'production' ? 'https://cloudflare-demo.mengchao10271254.workers.dev' : '/api'

    const [ data, setData ] = useState<string>('');
    const [ text, setText ] = useState<string>('');  

  useEffect(() => {
    fetch(`${url}/get${window.location.search || '?key=a'}`, {
    }).then(res => res.text()).then(res => setText(res));
  }, [url])
  

  function handleClick():void {
    fetch(`${url}/post${window.location.search}`, {
      method: "POST",
    }).then(res => res.text()).then(res => setData(res));
    console.log('You clicked me');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={handleClick}>请求Serverless</button>
        请求来的数据 ： { data } <br />
        content: { text }
      </header>

    </div>
  );
}

