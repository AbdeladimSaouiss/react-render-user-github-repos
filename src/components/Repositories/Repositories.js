import React, { Component } from "react";
import styled from "styled-components";
import { Waypoint } from "react-waypoint";

// Components
import Repository from "../Repository";

// Styled Component

const ReposWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Loading = styled.div`
  text-align: center;
  padding: 15px;
  margin: 0 15px 20px;
  background: #f0f1f4;

  @media (max-width: 720px) {
    margin: 20px 30px;
  }
`;

class Repositories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      repositories: [],
      page: 1,
      canNotFetchMore: false,
      isLoading: true,
    };
  }

  componentDidMount() {
    this.fetchGitHubRepos();
  }

  fetchGitHubRepos = () => {
    const { page, canNotFetchMore } = this.state;
    // const url = `https://api.github.com/users/addyosmani/repos?page=2`;
    const url = `https://api.github.com/users/addyosmani/repos?page=${page}`;
    fetch(url)
      .then((res) => res.json())
      .then((repositories) => {
        this.setState({
          isLoading: false,
          repositories: [...this.state.repositories, ...repositories],
          canNotFetchMore: !repositories.length ? true : canNotFetchMore,
        });
      });
  };

  handleWayPointEnter = (data, index) => {
    if (!this.state.canNotFetchMore) {
      this.setState(
        ({ page }) => ({ page: page + 1, isLoading: true }),
        () => this.fetchGitHubRepos()
      );
    }
  };

  render() {
    const { repositories, isLoading } = this.state;

    return (
      <>
        {repositories.length && (
          <ReposWrapper>{this.renderRepos()}</ReposWrapper>
        )}
        {isLoading && <Loading>Loading...</Loading>}
      </>
    );
  }

  renderRepos = () => {
    const { repositories } = this.state;

    return repositories.map((repo, index) => (
      <React.Fragment key={repo.id}>
        <Repository repo={repo} />
        {index === repositories.length - 1 && (
          <Waypoint onEnter={(data) => this.handleWayPointEnter(data, index)} />
        )}
      </React.Fragment>
    ));
  };
}

export default Repositories;
