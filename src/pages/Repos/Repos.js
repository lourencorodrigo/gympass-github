import React from "react";
import PropTypes from "prop-types";

import logoGitHub from "../../assets/images/github.svg";

import TextField from "../../components/TextField/TextField";
import ListRepos from "../../containers/ListRepos";
import TitlePage from "../../components/TitlePage";

import { Wrapper, Header, Logo, Form } from "./styles";

class Repos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ""
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
    if (user) {
      this.getAllRepos(user);
    }
  }

  getAllRepos(user) {
    const { getAll } = this.props;
    getAll(user);
  }

  handleChange(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { user } = this.state;
    this.getAllRepos(user);
  }

  render() {
    const { user } = this.state;
    const {
      reposState: { repos, loading }
    } = this.props;
    return (
      <Wrapper>
        <Header>
          <Logo src={logoGitHub} />
          <Form onSubmit={this.handleSubmit}>
            <TextField
              onChange={this.handleChange}
              name="user"
              id="user"
              value={user}
            />
          </Form>
        </Header>
        <TitlePage>Repositórios</TitlePage>
        <ListRepos repos={repos} loading={loading} />
      </Wrapper>
    );
  }
}

Repos.propTypes = {
  match: PropTypes.object,
  reposState: PropTypes.object,
  getAll: PropTypes.func,
  loading: PropTypes.bool
};

export default Repos;
