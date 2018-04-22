import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'element-theme-default';
import logo from './logo.svg';
import './App.css';
import { Button,Form,Input} from  'element-react';
import axios from 'axios'; //进行请求资源

class App extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      form:{
        id:'',
        title:'',
        content:''
      }
    };
  }

  //关于函数的提交
  onSubmit(e){
    e.preventDefault();
    axios.post('/api/adduser',{
        "uid": this.state.form.id,
        "title": this.state.form.title,
        "content": this.state.form.content
    }).then((res) => {
      console.log("进行必要的提交");
      console.log(res);
    })
  }

  onChange(key,value){
    this.state.form[key] = value;
    this.forceUpdate();
  }
   
   

  render() {


    return (
      <div className="main">
      <Form labelWidth="80" model={this.state.form} onSubmit={this.onSubmit.bind(this)}>
         <Form.Item label="ID号">
           <Input value={this.state.form.id} onChange={this.onChange.bind(this,'id')}>
           </Input>
         </Form.Item>
         <Form.Item label="头衔">
           <Input value={this.state.form.title} onChange={this.onChange.bind(this,'title')}></Input>
         </Form.Item>
         <Form.Item label="内容">
           <Input type="textarea" value={this.state.form.content} onChange={this.onChange.bind(this,'content')}></Input>
         </Form.Item>
         <Form.Item>
            <Button type="primary" nativeType="submit">提交</Button>
            <Button>取消</Button>
         </Form.Item>
      </Form>
      </div>
    );
  }
}

export default App;
