import React, {useContext} from "react";
import {Search} from "../components/Search";
import {Card} from "../components/Card";
import {GithubContext} from "../context/github/githubContext";

export const Home = () => {
 const {loading, users} = useContext(GithubContext)


  // console.log('Список USERS',users)
  return (
    <>
      <Search />

      <div className="row">


        {loading
        ? <p className="text-center">Загрузка...</p>
        : users.map(user => (
          <div className="col-sm-4 mb-4 mt-1" key={user.id}>
          <Card user={user}/>
          </div>
          ))
        }


      </div>
    </>
  )
}