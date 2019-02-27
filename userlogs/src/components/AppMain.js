import React, { Component } from 'react'

import '../App.css';

import { connect } from 'react-redux';
import { registerUser, loginUser } from '../actions';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

class AppMain extends Component {
  constructor(props){
    super(props);
    this.state = {
      initialized: false
    }
  }

  componentDidMount(){
    if(!this.state.initialized){
      // this.props.fetchingLogs();
      }
      this.setState({
        initialized: true
  })
  }

  componentDidUpdate(){
    localStorage.setItem('token', this.props.token)
    localStorage.setItem('secret', this.props.secret)
  }

  render() {
    return (
      <div className='mainApp'>
      <h1 className='headerText'>Userlogs</h1>
        <div class="topButtons">
          <RegisterForm registerUser={this.props.registerUser} />
          <LoginForm loginUser={this.props.loginUser} token={this.props.token} secret={this.props.secret} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    registerUser: state.userReducer.registerUser,
    loginUser: state.userReducer.loginUser,
    token: state.userReducer.token,
    secret: state.userReducer.secret
  };
};

export default connect(mapStateToProps, { registerUser, loginUser })(AppMain);