import React, { useEffect, useState } from "react";


const UseEffectAPI = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://api.github.com/users");
    setUsers(await response.json());
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h2>List of Github Users</h2>
      <div className="container-fuild">
        <div className="row text-center">
          {users.map((curElem) => {

                const {avatar_url, login, url, repos_url, gists_url, type} = curElem;

            return (
              <>
                <div className="col-10 col-md-4 mt-5 key={curElem.id}">
                  <div className="card p-1">
                    <div className="d-flex align-items-center">
                      <div className="avatar_image">
                        <img src={avatar_url} className="rounded" width="155" />
                      </div>
                      <div className="ml-3 w-100">
                        <h4 className="mb-0 mt-0 textLeft">{login}</h4>
                        <span className="textLeft">{url}</span>
                        <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                          <div className="d-flex flex-column">
                            <span className="public_repos">Public Repos-</span>
                            <span className="number1">{repos_url}</span>
                          </div>
                          <div className="d-flex flex-column">
                            <span className="public_gists">Public Gists</span>
                            <span className="number2">{gists_url}</span>
                          </div>
                          <div className="d-flex flex-column">
                            <span className="timming">Type</span>
                            <span className="date">{type}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default UseEffectAPI;
