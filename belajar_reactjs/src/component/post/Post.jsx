import React from "react";
import { useNavigate } from "react-router-dom"; 

const Post = (props) => {
  const navigate = useNavigate()
  return (
    <div className="p-3 mt-2">
      <div className="d-flex col-md-7 border">
        <img src="https://placeimg.com/200/100/tech" alt="" />
        <div className="mx-4">
          <h4 className="title-detail" onClick={() => navigate(`/detail-post/${props.data.id}`)}>{props.data.title}</h4>
          <p>{props.data.body}</p>
          <button className="btn btn-success" onClick={() => props.update(props.data)}>
            Update
          </button>
          <button className="btn btn-danger mx-2" onClick={() => props.remove(props.data.id)}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
