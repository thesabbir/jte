import axios from 'axios';

const jphApi = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  timeout: 100000
});

export function getPosts(req, res, next) {
  jphApi.get('/posts')
    .then(response => {
      req.posts = response.data;
      next();
    })
    .catch(error => next(error))
}

export function getPost(req, res, next) {
  jphApi.get(`/posts/${req.params.id}`)
    .then(response => {
      req.post = response.data;
      next();
    })
    .catch(error => next(error))
}

export function getComments(req, res, next) {
  jphApi.get(`/posts/${req.params.id}/comments`)
    .then(response => {
      req.comments = response.data;
      next();
    })
    .catch(error => next(error))
}
