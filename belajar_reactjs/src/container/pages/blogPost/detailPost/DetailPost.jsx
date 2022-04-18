import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function DetailPost() {
  const [post, setPost] = useState([]);
  let { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:3001/posts/${id}`).then((resp) => {
      setPost(resp.data);
    });
  }, []);

  return (
    <div>
      <p>{post.title}</p>
      <p>{post.body}</p>
    </div>
  );
}
