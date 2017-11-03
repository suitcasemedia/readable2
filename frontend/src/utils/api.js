import {v4 } from 'node-uuid';
const api = "http://localhost:3001"


// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}


export const fetchPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    //
    
export const fetchPost = (id) =>
  fetch(`${api}/posts/${id}`, { headers })
    .then(res => res.json())
    
      

export const fetchCategories = () =>
fetch(`${api}/categories`, { headers })
  .then(res => res.json())
 
export const createPost = (post) =>
fetch(`${api}/posts`, {
  method: 'POST',
  headers: {
    ...headers,
    'Content-Type': 'application/json'
  },  
  body: JSON.stringify({
    id:  v4() ,
    timestamp : Date.now(),
    title: post.title,
    body: post.body,
    author : post.author,
    category : post.category,
  })
}).then(res => res.json())


export const editPost = (values,id) =>

fetch(`${api}/posts/${id}`, {
  method: 'PUT',
  headers: {
    ...headers,
    'Content-Type': 'application/json'
  },  
  body: JSON.stringify({
    title: values.title,
    body: values.body,  
  })
})//.then(res => res.json())

export const postVote = (id, option) =>
fetch(`${api}/posts/${id}`, {
  method: 'POST',
  headers: {
    ...headers,
    'Content-Type': 'application/json'
},
  body: JSON.stringify({
    option 
  })
}).then(res => res.json())



export const postDelete = id =>
fetch(`${api}/posts/${id}`, {
  method: 'DELETE',
  headers: {
    ...headers,
    'Content-Type': 'application/json'
},
}).then(res => res.json())

  
export const fetchComments = (id) =>
fetch(`${api}/posts/${id}/comments`, { headers })
  .then(res => res.json())
/*
GET /posts/:id/comments
      USAGE:
        Get all the comments for a single post

    POST /comments
      USAGE:
        Add a comment to a post

      PARAMS:
        id: Any unique ID. As with posts, UUID is probably the best here.
        timestamp: timestamp. Get this however you want.
        body: String
        author: String
        parentId: Should match a post id in the database.

    GET /comments/:id
      USAGE:
        Get the details for a single comment

    POST /comments/:id
      USAGE:
        Used for voting on a comment.

    PUT /comments/:id
      USAGE:
        Edit the details of an existing comment

      PARAMS:
        timestamp: timestamp. Get this however you want.
        body: String

    DELETE /comments/:id
      USAGE:
        Sets a comment's deleted flag to 'true'
 */