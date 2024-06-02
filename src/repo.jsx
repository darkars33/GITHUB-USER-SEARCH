import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaCodeFork } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Repo = ({ repos }) => {
  const [repository, setRepository] = useState(null);
  const fetchRepos = async (repos) => {
    try {
      const response = await axios.get(repos);
      setRepository(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchRepos(repos);
  }, []);

  console.log(repository);

  return (
    <>
      {repository &&
        repository.map((repo) => {
          return (
            <>
              <div
                className="p-3 bg-blue-400 w-[30%] flex gap-10 items-center justify-around rounded-2xl"
                id={repo.id}
              >
                <div className="flex flex-col gap-3 w-[50%]">
                  <h1 className="text-white text-[20px]">{repo.name}</h1>
                  <h1 className="text-white text-[18px]">{repo.language}</h1>
                </div>
                <div className="flex flex-col gap-3 justify-center">
                  {repo.homepage && (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      className="text-blue-700 text-[20px] flex items-center gap-1"
                    >
                      visit{" "}
                      <FaArrowUpRightFromSquare className="text-blue-700 text-[20px]" />{" "}
                    </a>
                  )}
                  <div className="flex gap-10">
                    <div className="flex gap-2 items-center">
                      <FaRegStar className="text-white" />
                      <h1 className="text-white">{repo.stargazers_count}</h1>
                    </div>
                    <div className="flex gap-2 items-center">
                      <FaCodeFork className="text-white" />
                      <h1 className="text-white">{repo.forks_count}</h1>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
    </>
  );
};

export default Repo;
