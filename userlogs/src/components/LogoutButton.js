import React, { Component } from 'react'
import { Button } from 'reactstrap';

export default class LogoutButton extends Component {
  logout = () => {
    this.props.logOutAction();
    localStorage.removeItem('jwt');
    this.props.refreshPage();
 }

  render() {
    return (
      <div>
        <Button onClick={this.logout}>
          Logout
        </Button>
      </div>
    )
  }
}
