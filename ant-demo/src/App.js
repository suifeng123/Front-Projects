import React, { Component } from 'react';
import { Button } from 'antd';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button type="primary">基本按钮</Button>
        <Button type="danger">危险按钮</Button>
      </div>
    );
  }
}

export default App;
