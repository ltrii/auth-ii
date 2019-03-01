import React, { Component } from 'react'
import { Card } from 'reactstrap';

export default class UserDisplay extends Component {

  componentDidMount(){
    if(localStorage.getItem('jwt')){
      const jwtCur = localStorage.getItem('jwt');
      this.props.getUsers(jwtCur);
      this.props.refreshPage();
    }
  }


  render() {
    return (
      <div className="userHold">
        {/* {this.props.users.map((user, index) => (
            <Card>
                {user.username}
            </Card>
        ))} */}
      </div>
    )
  }
}
