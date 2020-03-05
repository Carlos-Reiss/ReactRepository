import React, { Component } from 'react';
import { FaGithubAlt } from 'react-icons/fa';
import api from '../../services/api';
import { Container } from '../Main/styles';
import {} from './styles';

export default class Repository extends Component {
  state = {
    repository: {},
    issues: [],
    loading: true,
  };

  async componentDidMount() {
    const { match } = this.props;
    const reponame = decodeURIComponent(match.params.repository);

    const [repository, issues] = await Promise.all([
      api.get(`/repos/${reponame}`),
      api.get(`/repos/${reponame}/issues`, {
        params: {
          state: 'open',
          per_page: 5,
        },
      }),
    ]);
    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
    });
  }

  render() {
    const { repository, issues, loading } = this.state;
    return (
      <Container>
        <>
          <h1>
            <FaGithubAlt />
            Repositórios
          </h1>
        </>
      </Container>
    );
  }
}
