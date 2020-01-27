import React, {Component} from 'react';
import {Button, Form, Icon, Input} from 'antd';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {ReqUserAC} from '../../redux/creators'

class LoginForm extends Component {
  constructor (props) {
    super (props);
    
    this.state = {
      username: null, password: null
    };
  }



  
  render () {
    const {username, password} = this.state;
  
    return (<>{this.props.isLogin === false ? (<Form layout="horizontal">
      <Form.Item label="Username">
        <Input
         prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
         placeholder="Введите ваш логин"
         autoComplete="Username"
         required="required"
         onChange={(e) => this.setState ({username: e.target.value})}
        />
      </Form.Item>
      <Form.Item label="Password">
        <Input.Password
         prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
         type="password"
         required="required"
         placeholder="Введите ваш пароль"
         autoComplete="current-password"
         onChange={(e) => this.setState ({password: e.target.value})}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" onClick={async (e) => {
          e.preventDefault ();
          const response = await fetch (`/login`, {
            method: 'POST', headers: {
              'Content-Type': 'application/json',
            }, body: JSON.stringify ({
              username: username, password: password
            })
          });
          this.setState ({username: null, password: null});
          const res = await response.json ();
          if (res.result) {
            localStorage.setItem("login", username)
            this.props.submit(res.result,username)
          }
          else {
            await alert ('Не правильно введены Логин и Пароль, по пробуйте еще раз.');
          }
        }}>
          Log in
        </Button>
      </Form.Item>
    </Form>) : (<Redirect to="/"/>)}
    </>);
  }
}

function mapDispatchToProps(dispatch) {


  return {
    submit: (status,user) => {
      dispatch( ReqUserAC(status,user) )
    }
  }
}
function mapStateToProps(store) {
  return {
    isLogin: store.isLogin,
    username: store.username
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm)