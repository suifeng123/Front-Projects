import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

   
   handleClick(){
       console.log("处理数据的步骤,首先要进行跨域操作");
       console.log("");
  }

  render() {


    return (

      <div className="App">

        <form method="post">
           UserName: <input type="text" name="uid" placeholder="请输入id" />
           Title: <input type="text" name="title" placeholder="请输入头衔" />
           Content: <textarea cols="20" rows="10" name="contnet"></textarea>
           <input type="submit" value="提交" onClick="handleClick" />
           <input type="reset" value="重置"  />
        </form>
      </div>
    );
  }
}

export default App;
