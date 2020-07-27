import React, { useState, createContext } from 'react';
import Panel1 from './components/Panel1';
import Panel2 from './components/Panel2';

export const StoreContext = createContext({})


function App() {
  const [store, setStore] = useState({name : "azer", age : 21});


  return (
    <div className="App">
      <StoreContext.Provider value = {{store, setStore}}>
        <Panel1/>
        <Panel2/>
      </StoreContext.Provider>
    </div>
  );
}


export default App;
