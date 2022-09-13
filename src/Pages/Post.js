import React from "react";
import { useLocation, useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  const query = new URLSearchParams(useLocation());
  return <h1>Id is = {id}</h1>;
};

export default Post;
