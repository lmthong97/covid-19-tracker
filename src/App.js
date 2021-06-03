import React from 'react';
import CountrySelector from './components/CountrySelector';
import Highlight from './components/Highlight';
import Summary from './components/Summary';



function App() {
  return (
    <div className="App">
      <CountrySelector/>
      <Highlight/>
      <Summary/>

    </div>
  );
}

export default App;
