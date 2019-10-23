import React from 'react';
import './App.css';
import { Header, Footer } from "basic-test"

const App: React.FC = () => {
  return (
    <div className="App">
      <Header foo="hello" bar="world" />
      <Footer name="hello" age="123"/>
    </div>
  );
}

export default App;
