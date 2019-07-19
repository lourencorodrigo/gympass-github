import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import logoGitHub from "../../assets/images/github.svg";
import TextField from "../../components/TextField/TextField";

import { Wrapper, Header, Logo, Form } from "./styles";
import Routes from "./Routes";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      page: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(event) {
    event.preventDefault();
    const { user } = this.state;
    this.props.history.push(`/repos/${user}`);
  }

  render() {
    const { user } = this.state;
    return (
      <Wrapper>
        <Header>
          <Link to="/">
            <Logo src={logoGitHub} />
          </Link>
          <Form onSubmit={this.handleSubmit}>
            <TextField
              onChange={this.handleChange}
              name="user"
              id="user"
              value={user}
            />
          </Form>
        </Header>
        <Routes />
      </Wrapper>
    );
  }
}

SearchBar.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object
};

export default SearchBar;
