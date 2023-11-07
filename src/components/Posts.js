import { useState, useEffect } from "react";
import Post from "./Post";
import "./post.css";

const API_URL = "https://random-data-api.com/api/v2/users?size=50";
function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API_URL);
        const posts = await res.json();
        setPosts(posts);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  // useEffect(() => {
  //   fetch(API_URL)
  //     .then((res) => res.json())
  //     .then((posts) => setPosts(posts))
  //     .catch((error) => console.log(error.message));
  // }, []);

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <>
      <h1>Posts</h1>
      <hr />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        posts.map((post) => <Post key={post.email} {...post} />)
      )}
    </>
  );
}

export default Posts;
