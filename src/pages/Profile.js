import React, {Fragment, useContext, useEffect} from "react";
import {GithubContext} from "../context/github/githubContext";
import {Link} from "react-router-dom";
import {Repos} from "../components/Repos";

export const Profile = ({match}) => {
  const {getUser, getRepos, loading, user, repos} = useContext(GithubContext)
  const urlName = match.params.name

  useEffect(() => {
    getUser(urlName)
    getRepos(urlName)
    // eslint-disable-next-line
  }, [])

  if (loading) {
    return <p className="text-center">Загрузка...</p>
  }

  const {
    name, company, avatar_url,
    location, bio, blog,
    login, html_url, followers,
    following, public_repos,
    public_gists
  } = user

  console.log('User v prof',user)

  return (
    <>
      <Link to="/" className="btn btn-link">На главную</Link>

      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3 text-center">
              <img
                src={avatar_url}
                alt={name}
                style={{width: '150px'}}
              />
              <h1>{name}</h1>
              {location && <p>Местоположение: {location}</p>}
            </div>
            <div className="col">
              {
                bio && <Fragment>
                  <h3>BIO</h3>
                  <p>{bio}</p>
                </Fragment>
              }
              <a
                href={html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark"
              >Открыть профиль</a>
              <ul>
                {login && <li>
                  <strong>Username: {login}</strong>
                </li>}
                {company && <li>
                  <strong>Компания: {company}</strong>
                </li>}
                {blog && <li>
                  <strong>Website: {blog}</strong>
                </li>}
              </ul>

              <span className="badge badge-primary">Подписчики: {followers}</span>
              <span className="badge badge-success">Подписан: {following}</span>
              <span className="badge badge-info">Репозитории: {public_repos}</span>
              <span className="badge badge-dark">Gists: {public_gists}</span>
            </div>
          </div>
        </div>
      </div>

      <Repos repos={repos}/>
    </>
  )
}