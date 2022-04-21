import Get from './Get'
import Post from './Post'
import Put from './Put'
import Delete from './Delete'

// DELETE
const deleteNewsBlog = (id) => Delete(`posts/${id}`);

// PUT
const updateNewsBlog = (data, id) => Put(`posts/${id}`, data);

// POST
const postNewsBlog = (data) => Post("posts", data);

// GET
const getNewsBlog = () => Get("posts?_sort=id&_order=desc");

const API = {
  getNewsBlog,
  postNewsBlog,
  deleteNewsBlog,
  updateNewsBlog
};

export default API;
