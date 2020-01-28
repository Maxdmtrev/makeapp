import React, {Component} from 'react';
import {Route, Router} from 'react-router';
import RegistrationForm from './components/users/RegForm';
import Home from './components/home/Home';
import List from './components/home/List'
import Slider from './components/render/Slider';
import NavConstructor from './components/construtor/NavConstructor';
import Navigation from './components/users/Navigation';
import Login from './components/users/LoginForm';
import {createBrowserHistory} from 'history';
import {ReqUserAC} from './redux/creators';
import {connect} from 'react-redux';
import 'antd/dist/antd.css';
import '../src/app.css';

import {Icon, Layout, BackTop} from 'antd';

const {Header, Footer, Content} = Layout;

const customHistory = createBrowserHistory ();

class Routers extends Component {
  async componentDidMount () {
    if (localStorage.getItem ('login')) {
      const response = await fetch (`/login`, {
        method: 'get', headers: {
          'Content-Type': 'application/json',
        }
      });
      const res = await response.json ();
      if (res.result) {
        localStorage.setItem ('login', res.user);
        this.props.submit (res.result, res.user, res.todolist);
      }
      else {
        localStorage.removeItem("login")
      }
    }
  }
  
  render () {
    return (<Router history={customHistory}>
      <Layout style={{ backgroundColor: "white"}} >
        <Header style={{margin: 5}}>
        
            <Navigation history={customHistory}/>
    
         
        </Header>
        <Content >
          {this.props.ymaps ? <Route exact path="/" component={Home}/> : <>loading</>}
    
          <Route path='/login' component={Login}/>
          <Route path='/room' component={NavConstructor}/>
          <Route path='/slider' component={Slider}/>
          <Route path='/registration' component={RegistrationForm}/>
          <Route path='/list' component={List} />
        </Content>
        <Footer style={{ backgroundColor: "white"}} >Контакты:
          <Icon type="instagram" style={{fontSize: '30px', color: '#08c'}} theme=""/>
          <Icon type="slack" style={{fontSize: '30px', color: '#08c'}} theme=""/>
          <Icon type="github" style={{fontSize: '30px', color: '#08c'}} theme=""/>
          <BackTop style={{ left: "50px"}} />
        </Footer>
      </Layout>


    </Router>);
  }
}

function mapDispatchToProps (dispatch) {
  return {
    submit: (status, user,data) => {
      dispatch (ReqUserAC (status, user,data));
    }
  };
}

function mapStateToProps (store) {
  return {
    isLogin: store.isLogin, username: store.username, ymaps: store.ymaps
  };
}

export default connect (mapStateToProps, mapDispatchToProps) (Routers);



