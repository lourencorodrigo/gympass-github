import { connect } from "react-redux";

import { getAll } from "../../actions/repos";

import Repos from "./Repos";

const mapStateToProps = state => ({
  reposState: state.repos
});

const mapDispatchToProps = { getAll };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Repos);
