import React from "react";
import PropTypes from "prop-types";

import ShimmerLoading from "../../components/ShimmerLoading";
import List from "../../components/List";

import { WrapperShimmer } from "./styles";

const renderLinesLoading = () =>
  [1, 2, 3, 4, 5].map(n => (
    <WrapperShimmer key={n}>
      <ShimmerLoading />
    </WrapperShimmer>
  ));

const ListRepos = ({ repos, loading }) => (
  <List>
    {!loading &&
      repos.map(repo => (
        <List.Item key={repo.id} stars={repo.stargazers_count}>
          {repo.name}
        </List.Item>
      ))}
    {loading && renderLinesLoading()}
  </List>
);

ListRepos.propTypes = {
  repos: PropTypes.array,
  loading: PropTypes.bool
};

export default ListRepos;
