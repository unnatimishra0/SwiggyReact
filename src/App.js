import React from 'react';
import ReactDOM from 'react-dom/client';
import Component from './Component';

import './App.css';
import Body from './Component/Body';
import Header from './Component/Header';
import ResturantCard from './Component/ResturantCard';

function App() {
  return (
    <div className="App">
      <Header/>
      <Body/>
      <ResturantCard/>
    </div>
  );
}

export default App;

// const jsxHeading=<h1 id='heading'> Namaste</h1>
// console.log(jsxHeading);

// const root=ReactDOM.createRoot(document.getElementById('root'));

// root.render(jsxHeading);
