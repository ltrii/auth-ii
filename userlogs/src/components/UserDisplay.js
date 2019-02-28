import React, { Component } from 'react'
import { Card } from 'reactstrap';

export default class UserDisplay extends Component {
    constructor(props){
        super(props);
        this.state = {
          users: []
        }
    }

  componentDidMount(){
    if(localStorage.getItem('jwt')){
      console.log("Found JWT on UserDisplay")
      const jwtCur = localStorage.getItem('jwt');
      this.props.getUsers(jwtCur);
    }
  }
  render() {
    return (
      <div className="userHold">
        {this.state.users.map((user, index) => (
            <Card>
                {user}
            </Card>
        ))}
      </div>
    )
  }
}
