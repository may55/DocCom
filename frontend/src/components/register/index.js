import React, {Component} from 'react';
import {Form, Icon, Message, Button} from 'semantic-ui-react';
import StatusMessage from '../../components/statusmessage';
import './styles.css';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      name: '',
      email: '',
      password: '',
      bio:'',
      license:'',
      checked: true,
    };
  }

  handleChange = (e, {name, value}) => {
    this.setState({[name]: value});
  };

  handleCheckbox = () => {
    this.setState({checked: !this.state.checked});
  };

  isFormValid = () => {
    const {username, name, email, password, checked,license} = this.state;

    let isFormValid = true;
    if (!username || !name || !email || !password || !checked || !license) {
      isFormValid = false;
    }
    return isFormValid;
  };

  handleSubmit = e => {
    if (this.isFormValid()) {
      let data = {
        username: this.state.username,
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        license: this.state.license,
      };
      this.props.handleRegister(data);
    }
  };

  render() {
    let {isLoading, error, showLogin} = this.props;

    const statusMessage = (
      <StatusMessage
        error={error}
        errorMessage={error || 'Login Error'}
        loading={isLoading}
        loadingMessage={'Registering your account'}
        type="modal"
      />
    );

    return (
      <div>
        <div class="register-header">
          <Message
            attached
            header="Welcome to our site!"
            content="Fill out the form below to sign-up for a new account"
          />
        </div>
        
        {statusMessage}
        <Form className="attached fluid segment">
          <Form.Input
            required
            label="Username"
            placeholder="Username"
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <Form.Input
            required
            label="Name"
            placeholder="Name"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <Form.Input
            required
            label="Email"
            placeholder="Email"
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <Form.Input
            required
            label="Password"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <Form.Input
            required
            label="Licence"
            placeholder="125ASV23"
            type="text"
            name="license"
            value={this.state.license}
            onChange={this.handleChange}
          />

          <Form.Checkbox
            inline
            required
            label="I agree to the terms and conditions"
            name="agreement"
            checked={this.state.checked}
            onChange={this.handleCheckbox}
          />
          <Button
            color="green"
            loading={isLoading}
            disabled={isLoading}
            onClick={this.handleSubmit}>
            Submit
          </Button>
        </Form>
        <Message attached="bottom" warning>
          <Icon name="help" />
          Already signed up?&nbsp;
          {/* eslint-disable-next-line */}
          <a className="register-login" onClick={showLogin}>
            Login here
          </a>
          &nbsp;instead.
        </Message>
      </div>
    );
  }
}
