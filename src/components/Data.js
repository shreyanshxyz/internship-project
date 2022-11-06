import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Posts from "./Posts";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";

function Data() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(200);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="main">
      <SearchBar placeholder="Enter a Book Name..." data={currentPosts} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
      <Posts posts={currentPosts} loading={loading} />
    </div>
  );
}

export default Data;
