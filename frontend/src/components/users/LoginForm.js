import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {ReqUserAC} from '../../redux/creators';
import {Button, Card, Col, Form, Icon, Input, notification} from 'antd';

class LoginForm extends Component {
  constructor (props) {
    super (props);
    this.state = {
      username: null, password: null
    };
  }

  loginHandler = async (e) => {
    const {username, password} = this.state;
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
      localStorage.setItem('login', username);
      this.props.submit(res.result, username);
      this.openOkNotification()
    }
    else {
      this.openNotification()
    }
  };

  openOkNotification = () => {
    notification.open({
      icon: <Icon type='smile' style={{ color: '#108ee9' }} />,
      message: 'Добро пожаловать',
      description:
       `${this.props.username}`

    });
  };

  openNotification = () => {
    notification.open({
      icon: <Icon type='frown' style={{ color: '#108ee9' }} />,
      message: 'Произошла ошибка',
      description:
       'Не правильно введены Логин или Пароль, попробуйте еще раз.'

    });
  };

  render () {
    return (
     <div className='backImg' >
       <Card title='Добро пожаловать!' className='cardLogin'>
         <Col offset={0} span={24} >
            {this.props.isLogin === false ?
            (<Form layout='horizontal'>
               <Form.Item label='Username'>
                 <Input
                  prefix={<Icon type='user' className='iconColor'/>}
                  placeholder='Введите ваш логин'
                  autoComplete='Username'
                  required='required'
                  onChange={(e) => this.setState ({username: e.target.value})}
                 />
               </Form.Item>
               <Form.Item label='Password'>
                 <Input.Password
                  prefix={<Icon type='lock' className='iconColor'/>}
                  type='password'
                  required='required'
                  placeholder='Введите ваш пароль'
                  autoComplete='current-password'
                  onChange={(e) => this.setState ({password: e.target.value})}
                 />
               </Form.Item>
               <Form.Item>
                 <Button type='primary' htmlType='submit' onClick={this.loginHandler}>
                   Log in
                 </Button>
               </Form.Item>
            </Form>) : (<Redirect to='/'/>
            )}
         </Col>
        </Card>
     </div>
     );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    submit: (status, user) => {
      dispatch( ReqUserAC(status, user) )
    }
  }
}

function mapStateToProps(store) {
  return {
    isLogin: store.isLogin,
    username: store.username
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
