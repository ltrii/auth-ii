import React, { Component } from 'react';
import { Form, Input, Button, FormGroup, Modal } from 'reactstrap';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curName: '',
      curPassword: '',
      modal: false
    }

    this.toggle = this.toggle.bind(this);
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    let newUser = {
      username: this.state.curName,
      password: this.state.curPassword
    }
    this.props.loginUser(newUser);
    this.setState({
      modal: false
    })
    this.props.refreshPage();
  }

  
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }


  render() {
    return (
      <div className="loginDiv">
        <Button color="primary" onClick={this.toggle}>Login</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <div className="modalHold">
          <h2>Log In</h2>
          <Form onSubmit={e => this.handleSubmit(e)}>
            <FormGroup>
              <Input className="modalInput" required onChange={this.handleChange} type="text" placeholder="Username" name="curName" value={this.state.curName} />
              <Input className="modalInput" required onChange={this.handleChange} type="password" placeholder="Password" name="curPassword" value={this.state.curPassword} />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </div>
        </Modal>
      </div>
    )
  }
}