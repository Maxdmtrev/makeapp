import React from 'react';
import {Button, Form, Icon, Input, Tooltip,} from 'antd';
import {Redirect} from "react-router"
import {AddUserAC} from '../../redux/creators';
import {connect} from 'react-redux';

class RegForm extends React.Component {
  
  constructor (props) {
    super (props);
    this.state = {
      username: null, password: null, email: null
    };
  }
  
  
  render () {
    const {username, email, password} = this.state;
    return (
     <div>{this.props.isLogin === false ?
      <Form>
      <Form.Item label="E-mail">
        <Input
         prefix={<Icon type="mail" style={{color: 'rgba(0,0,0,.25)'}}/>}
         required="required"
         placeholder="Password"
         autoComplete="current-password"
         value={email}
         onChange={(e) => {
           this.setState ({email: e.target.value});
         }}
        />
      </Form.Item>
      <Form.Item label="Password" hasFeedback={true}>
        <Input.Password
         prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
         type="password"
         required="required"
         placeholder="Password"
         autoComplete="current-password"
         value={password} onChange={(e) => {
          this.setState ({password: e.target.value});
        }}/>
      </Form.Item>
      <Form.Item
       label={<span>
              Username&nbsp;
         <Tooltip title="Имя пользователя должно быть уникально, но это не точно.">
                <Icon type="question-circle-o"/>
              </Tooltip>
            </span>}>
        <Input
         prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
         placeholder="Username"
         autoComplete="Username"
         required="required"
         value={username} onChange={(e) => {
          this.setState ({username: e.target.value});
        }}/>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" onClick={async (e) => {
          e.preventDefault ();
          const response = await fetch (`/signIn`, {
            method: 'POST', headers: {
              'Content-Type': 'application/json',
            }, body: JSON.stringify ({
              username: username, email: email, password: password
            })
          });
          const res = await response.json ();
          if (res.result) {
            this.props.submit (res.result, username);
            localStorage.setItem("login", username)
          }
          else {
            await alert (res.error.errmsg);
           
          }
          
        }}>
          Register
        </Button>
      </Form.Item>
      </Form>
      : (<Redirect to="/game"/>)}
     </div>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    submit: (status, user) => {
      dispatch (AddUserAC (status, user));
    }
  };
}

function mapStateToProps (store) {
  return {
    isLogin: store.isLogin
  };
}

export default connect (mapStateToProps,mapDispatchToProps) (RegForm);