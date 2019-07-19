import React from "react";
import PropTypes from "prop-types";

import { ReactComponent as StarIcon } from "../../assets/images/star.svg";
import ShimmerLoading from "../../components/ShimmerLoading";
import List from "../../components/List";

import { WrapperShimmer, Title, Stars, Header, Body, Link } from "./styles";

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
        <List.Item key={repo.id}>
          <Link to={`/repos/${repo.owner.login}/${repo.name}/commits`}>
            <Header>
              <Title>{repo.name}</Title>
            </Header>
            <Body>
              <StarIcon />
              <Stars>{repo.stargazers_count}</Stars>
            </Body>
          </Link>
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
