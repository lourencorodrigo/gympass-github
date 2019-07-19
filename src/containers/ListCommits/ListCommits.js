import React from "react";
import PropTypes from "prop-types";

import ShimmerLoading from "../../components/ShimmerLoading";
import List from "../../components/List";

import { WrapperShimmer, Title, Header } from "./styles";

const renderLinesLoading = () =>
  [1, 2, 3, 4, 5].map(n => (
    <WrapperShimmer key={n}>
      <ShimmerLoading />
    </WrapperShimmer>
  ));

const ListCommits = ({ commits, loading }) => (
  <List>
    {!loading &&
      commits.map(commit => (
        <List.Item key={commit.node_id}>
          <Header>
            <Title>{commit.commit.message}</Title>
          </Header>
        </List.Item>
      ))}
    {loading && renderLinesLoading()}
  </List>
);

ListCommits.propTypes = {
  commits: PropTypes.array,
  loading: PropTypes.bool
};

export default ListCommits;
