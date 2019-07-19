import React from "react";
import PropTypes from "prop-types";
import queryString from "query-string";

import ListCommits from "../../containers/ListCommits";
import TitlePage from "../../components/TitlePage";

class Commits extends React.Component {
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

  render() {
    const {
      commitsState: { commits, loading }
    } = this.props;

    return (
      <>
        <TitlePage>Commits</TitlePage>
        <ListCommits commits={commits} loading={loading} />
      </>
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
