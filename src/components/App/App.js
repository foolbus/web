import React, { Component } from 'react';
import CodeEditor from '../CodeEditor';
import styled from 'styled-components'

import './App.css';

const Button = styled.button`
  background: black;
  border-radius: 2px;
  border: 2px solid white;
  color: white;
  margin: 10px;
  padding: 5px;
`


class App extends Component {


  render() {
    return (
      <div className="App">

            <CodeEditor />
      </div>
    );
  }
}

export default App;
