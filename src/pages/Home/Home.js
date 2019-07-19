import React from "react";
import PropTypes from "prop-types";

import TextField from "../../components/TextField";

import { Wrapper, Form } from "./styles";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { user } = this.state;
    const { push } = this.props.history;
    push(`/repos/${user}`);
  }

  render() {
    const { user } = this.state;
    return (
      <Wrapper>
        <Form onSubmit={this.handleSubmit}>
          <TextField
            onChange={this.handleChange}
            value={user}
            name="user"
            id="user"
            placeholder="Enter Your User GitHub"
            type="text"
          />
        </Form>
      </Wrapper>
    );
  }
}

Home.propTypes = {
  history: PropTypes.object
};

export default Home;
