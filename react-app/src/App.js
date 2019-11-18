import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/header'
import Header from "./components/header";

class App extends React.Component{
  render() {
    return (
        <Header/>
    );
  }
}

export default App;
