import React from "react";
import PropTypes from "prop-types";

import logoGitHub from "../../static/images/github.svg";

import TextField from "../../components/TextField/TextField";

import { Wrapper, Header, Logo, InputWrapper } from "./styles";

class Repos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const {
      match: {
        params: { user }
      }
    } = this.props;
    this.setState({ user });
  }

  handleChange(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { user } = this.state;
    return (
      <Wrapper>
        <Header>
          <Logo src={logoGitHub} />
          <InputWrapper>
            <TextField
              onChange={this.handleChange}
              name="user"
              id="user"
              value={user}
            />
          </InputWrapper>
        </Header>
      </Wrapper>
    );
  }
}

Repos.propTypes = {
  match: PropTypes.object
};

export default Repos;
