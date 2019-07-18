import { connect } from "react-redux";

import { getAll } from "../../actions/commits";

import Commits from "./Commits";

const mapStateToProps = state => ({
  commitsState: state.commits
});

const mapDispatchToProps = { getAll };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Commits);
