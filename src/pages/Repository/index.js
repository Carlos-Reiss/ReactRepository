import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaGithubAlt, FaSpinner, FaPlus, FaChevronLeft } from 'react-icons/fa';
import PropTypes from 'prop-types';
import api from '../../services/api';
import Container from '../../components/container';
import { Loading, Owner, IssuesList, FilterList } from './styles';

export default class Repository extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    repository: {},
    issues: [],
    loading: true,
    filter: [
      { state: 'all', ativo: false },
      { state: 'open', ativo: true },
      { state: 'closed', ativo: false },
    ],
  };

  async componentDidMount() {
    const { match } = this.props;
    const { filter } = this.state;

    const reponame = decodeURIComponent(match.params.repository);

    const [repository, issues] = await Promise.all([
      api.get(`/repos/${reponame}`),
      api.get(`/repos/${reponame}/issues`, {
        params: {
          state: filter.map(f => f.ativo).state,
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
    const { repository, issues, loading, filter } = this.state;
    const { name } = repository;
    if (loading) {
      return (
        <Loading>
          <FaSpinner id="load" size={35} />
          Carregando
        </Loading>
      );
    }
    return (
      <Container>
        <>
          <Link to="/">
            <FaChevronLeft size={30} className="backhome" />
          </Link>

          <h1>
            <FaGithubAlt />
            Repositórios
          </h1>
          <Owner>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <h1>{name}</h1>
            <p>{repository.description}</p>
            <a href={repository.html_url}>
              <FaPlus size={14} color="#222" className="icon" />
              detalhes
            </a>
          </Owner>
          <FilterList filter={filter}>
            <>
              <div>
                {filter.map(f => (
                  <button type="button" key={f.state}>
                    {f.state}
                  </button>
                ))}
              </div>
            </>
          </FilterList>
          <IssuesList>
            {issues.map(issue => (
              <li key={String(issue.id)}>
                <div>
                  <img src={issue.user.avatar_url} alt={issue.user.login} />
                  <p>{issue.user.login}</p>
                </div>
                <div>
                  <strong>
                    <a href={issue.html_url}>{issue.title}</a>
                    {/** Labels */}
                  </strong>
                </div>
              </li>
            ))}
          </IssuesList>
        </>
      </Container>
    );
  }
}
