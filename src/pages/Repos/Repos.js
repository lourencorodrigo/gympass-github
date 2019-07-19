import React from "react";
import PropTypes from "prop-types";

import ListRepos from "../../containers/ListRepos";
import TitlePage from "../../components/TitlePage";

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
    this.getAllRepos();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.getAllRepos();
    }
  }

  getAllRepos() {
    const {
      getAll,
      match: {
        params: { user }
      }
    } = this.props;
    if (user) {
      this.setState({ user });
      getAll(user);
    }
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
    const {
      reposState: { repos, loading }
    } = this.props;
    return (
      <>
        <TitlePage>Repositórios</TitlePage>
        <ListRepos repos={repos} loading={loading} />
      </>
    );
  }
}

Repos.propTypes = {
  match: PropTypes.object,
  location: PropTypes.object,
  reposState: PropTypes.object,
  getAll: PropTypes.func,
  loading: PropTypes.bool
};

export default Repos;
