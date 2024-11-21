import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Loading,
  Container,
  Owner,
  BackButton,
  IssuesList,
  PageActions,
  IssuesListView,
  IssueState,
} from "./styles";
import { FaArrowLeft } from "react-icons/fa";

import api from "../../services/api";

export default function Repositorio() {
  const [repositorio, setRepositorio] = useState({});
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const { repositorio: nomeRepositorio } = useParams();
  const [page, setPage] = useState(1);
  const [state, setState] = useState("open");
  useEffect(() => {
    async function load() {
      const nomeRepo = decodeURIComponent(nomeRepositorio);

      const [repositorioData, issuesData] = await Promise.all([
        api.get(`/repos/${nomeRepo}`),
        api.get(`/repos/${nomeRepo}/issues`, {
          params: { state: "open", per_page: 5 },
        }),
      ]);
      setRepositorio(repositorioData.data);
      setIssues(issuesData.data);
      setLoading(false);
    }
    load();
  }, [nomeRepositorio]);

  useEffect(() => {
    async function loadIssue() {
      const nomeRepo = decodeURIComponent(nomeRepositorio);
      const response = await api.get(`/repos/${nomeRepo}/issues`, {
        params: { state, per_page: 5, page },
      });

      setIssues(response.data);
    }
    loadIssue();
  }, [page, nomeRepositorio, state]);

  function handlePage(action) {
    setPage(action === "back" ? page - 1 : page + 1);
  }

  function handleFilter(action) {
    setPage(1);
    if (action === "closed") {
      setState("closed");
    } else if (action === "all") {
      setState("all");
    } else {
      setState("open");
    }
  }

  const getIssueStateStyle = (issueState) => {
    if (issueState === "open") {
      return { text: "Aberto", color: "green" };
    }
    if (issueState === "closed") {
      return { text: "Fechado", color: "red" };
    }
    return { text: issueState, color: "gray" };
  };

  if (loading) {
    return (
      <Loading>
        <h1>Carregando...</h1>
      </Loading>
    );
  }
  return (
    <Container>
      <BackButton to="/">
        <FaArrowLeft color="#000" size={30} />
      </BackButton>
      <Owner>
        <img src={repositorio.owner.avatar_url} alt={repositorio.owner.login} />
        <h1>{repositorio.name}</h1>
        <p>{repositorio.description}</p>
      </Owner>
      <IssuesListView>
        <button type="button" onClick={() => handleFilter("all")}>
          Todas
        </button>
        <button type="button" onClick={() => handleFilter("open")}>
          Abertas
        </button>
        <button type="button" onClick={() => handleFilter("closed")}>
          Fechadas
        </button>
      </IssuesListView>
      <IssuesList>
        {issues.map((issue) => {
          const { text, color } = getIssueStateStyle(issue.state);
          return (
            <li key={String(issue.id)}>
              <span
                id="tag"
                style={{
                  backgroundColor: color,
                  color: "#fff",
                  height: "20px",
                  padding: "6px 8px",
                  borderRadius: "6px",
                }}
              >
                {text}
              </span>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <div>
                <strong>
                  <a href={issue.html_url}>{issue.title}</a>
                  {issue.labels.map((label) => (
                    <span key={String(label.id)}>{label.name}</span>
                  ))}
                </strong>
                <p>{issue.user.login}</p>
              </div>
            </li>
          );
        })}
      </IssuesList>
      <PageActions>
        <button
          type="button"
          onClick={() => handlePage("back")}
          disabled={page < 2}
        >
          Retornar
        </button>
        <button type="button" onClick={() => handlePage("next")}>
          Avançar
        </button>
      </PageActions>
    </Container>
  );
}
