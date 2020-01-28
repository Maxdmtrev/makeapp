import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Icon, Menu, notification} from 'antd';
import {LogoutUserAC} from '../../redux/creators';

class Navigation extends Component {
  
  openNotification = (user) => {
    notification.open({
      icon: <Icon type="smile" style={{ color: '#108ee9' }} />,
      message: 'Ждем вас снова.',
      description:
       `Всего доброго, ${user}`
    });
  };
  
  render () {
    return (<Menu mode="horizontal">
      <Menu.Item>
        <Link to="/">
          <Icon type="code"/> Home
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/slider">
          <Icon type="copy"/> Slider
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/room">
          <Icon type="snippets"/> AppartmentDesign
        </Link>
      </Menu.Item>
      
      {this.props.isLogin ? (<Menu.Item style={{float: 'right'}}>
        <Link to="/logout" onClick={async (e) => {
          e.preventDefault ();
          localStorage.removeItem ('login');
          let response = await fetch (`/logout`, {
            method: 'get', headers: {
              'Content-Type': 'application/json',
            }
          });
          let result = await response.json ();
          this.props.logout (!result);
          this.props.history.push ('/login');
          this.openNotification (result.user);
        }}>
          <Icon type="logout"/> Logout
        </Link>
      </Menu.Item>) : (<Menu.Item style={{float: 'right'}}>
        <Link to="/login">
          <Icon type="login"/> Login
        </Link>
      </Menu.Item>)}
  
      {this.props.isLogin ? <Menu.Item style={{float: 'right'}}>
         <Link to='/info'>
           <Icon type="user"/> {this.props.username}
         </Link>
       </Menu.Item>
   
       : <Menu.Item style={{float: 'right'}}>
         <Link to="/registration">
           <Icon type="form"/> Registration
         </Link>
       </Menu.Item>}
    </Menu>);
  }
}

function mapDispatchToProps (dispatch) {
  return {
    logout: (status, user) => {
      dispatch (LogoutUserAC (status, user));
    }
  };
}

function mapStateToProps (store) {
  return {
    isLogin: store.isLogin, username: store.username
  };
}

export default connect (mapStateToProps, mapDispatchToProps) (Navigation);