import React from 'react';
import './App.css';
import Weather from './Weather';


export default function App() {
  return (
    <div className="App">
      <div className="container">
     
     <Weather defaultCity="Glasgow"/>
     <footer>
       This project was coded by <a href="https://admiring-sinoussi-3cc72d.netlify.app/">Nicole Gainska</a> and is {""}
     <a href="https://github.com/ngainska/new-react-weather" target="_blank" rel="noreferrer">
open-sourced on GitHub
     </a> and <a href="https://dreamy-kare-fc405e.netlify.app/">hosted on Netlify</a>
     </footer>
     </div>
    </div>
  );
}


