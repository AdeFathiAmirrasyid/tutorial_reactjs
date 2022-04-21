import axios from "axios";

const Delete = (path) => {
  const promise = new Promise((resolve, reject) => {
    axios.delete(`http://localhost:3001/${path}`).then(
      (resp) => {
        resolve(resp.data);
      },
      (err) => {
        reject(err);
      }
    );
  });
  return promise;
};

export default Delete;
