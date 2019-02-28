import React, { Component } from 'react';
import { Form, Input, Button, FormGroup, Modal } from 'reactstrap';

export default class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curName: '',
      curPassword: '',
      modal: false
    }

    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    this.setState({
        curName: '',
        curPassword: ''
      })
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
    this.props.registerUser(newUser);
    this.setState({
      curName: '',
      curPassword: '',
      modal: false
    })
  }

  
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }


  render() {
    return (
      <div className="registerDiv">
        <Button color="primary" onClick={this.toggle}>Register</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <div className="modalHold">
        <h2>Register</h2>
          <Form onSubmit={e => this.handleSubmit(e)}>
            <FormGroup>
              <Input required onChange={this.handleChange} type="text" placeholder="Username" name="curName" value={this.state.curName} />
              <Input required onChange={this.handleChange} type="password" placeholder="Password" name="curPassword" value={this.state.curPassword} />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </div>
        </Modal>
      </div>
    )
  }
}