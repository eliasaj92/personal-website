import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/header'
import Header from "./components/header"
import Footer from "./components/footer"

class App extends React.Component{
  render() {
    return (
        [<Header/>,
        <Footer/>]
    );
  }
}

export default App;
