import axios from "axios";

const Post = (path, data) => {
  const promise = new Promise((resolve, reject) => {
    axios.post(`http://localhost:3001/${path}`, data).then(
      (resp) => {
        resolve(resp);
      },
      (err) => {
        reject(err);
      }
    );
  });
  return promise;
};

export default Post;