import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";

function Projects() {

  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const username = "jugalmehta12"; // Replace with your GitHub username

  const fetchRepos = () => {

    setLoading(true);
    setError(null);

    fetch(`https://api.github.com/users/${username}/repos`)
      .then((response) => {

        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }

        return response.json();
      })

      .then((data) => {
        setRepos(data);
      })

      .catch((err) => {
        setError(err.message);
      })

      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <ErrorMessage
        message={error}
        retry={fetchRepos}
      />
    );
  }

  const filteredRepos = repos.filter((repo) =>
    repo.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "30px" }}>

      <h1>My GitHub Projects</h1>

      <input
        type="text"
        placeholder="Search Repository"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <br /><br />

      {filteredRepos.map((repo) => (

        <div
          key={repo.id}
          style={{
            border: "1px solid gray",
            marginBottom: "15px",
            padding: "15px"
          }}
        >
          <h3>{repo.name}</h3>

          <p>⭐ Stars : {repo.stargazers_count}</p>

          <a
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
          >
            {repo.html_url}
          </a>

        </div>

      ))}

    </div>
  );
}

export default Projects;