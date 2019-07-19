import React from "react";
import PropTypes from "prop-types";
import queryString from "query-string";

import logoGitHub from "../../static/images/github.svg";

import TextField from "../../components/TextField/TextField";
import ListCommits from "../../containers/ListCommits";
import TitlePage from "../../components/TitlePage";

import { Wrapper, Header, Logo, Form } from "./styles";

class Commits extends React.Component {
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
        params: { user, repo }
      },
      location: { search }
    } = this.props;

    const values = queryString.parse(search);
    const page = values.page || 0;
    this.setState({ user, repo, page });

    if (user) {
      this.getAllCommits(user, repo, page);
    }
  }

  getAllCommits(user, repo, page) {
    const { getAll } = this.props;
    getAll(user, repo, page);
  }

  handleChange(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { user } = this.state;
    this.getAllCommits(user);
  }

  render() {
    const { user } = this.state;
    const {
      commitsState: { commits, loading }
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
        <TitlePage>Commits</TitlePage>
        <ListCommits commits={commits} loading={loading} />
      </Wrapper>
    );
  }
}

Commits.propTypes = {
  match: PropTypes.object,
  location: PropTypes.object,
  commitsState: PropTypes.object,
  getAll: PropTypes.func,
  loading: PropTypes.bool
};

export default Commits;
