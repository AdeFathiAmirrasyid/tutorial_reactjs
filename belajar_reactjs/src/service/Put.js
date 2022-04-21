import axios from "axios";

const Put = (path, data) => {
  const promise = new Promise((resolve, reject) => {
    axios.put(`http://localhost:3001/${path}`, data).then(
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

export default Put;
