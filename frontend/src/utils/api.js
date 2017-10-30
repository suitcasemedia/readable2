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

