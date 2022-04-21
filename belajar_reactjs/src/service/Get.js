import axios from "axios";

const Get = (path) => {
  const promise = new Promise((resolve, reject) => {
    axios.get(`http://localhost:3001/${path}`).then(
      (resp) => {
        console.log(resp);
        resolve(resp.data);
      },
      (err) => {
        reject(err);
      }
    );
  });
  return promise;
};

export default Get;