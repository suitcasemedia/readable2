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


export const fetchPost = (id) =>
  fetch(`${api}/posts/${id}`, { headers })
   .then(res => res.json())
    
export const fetchPosts = () =>
fetch(`${api}/posts`, { headers })
  .then(res => res.json())
  
      
export const rank = posts =>
fetch(`${api}/posts`, {
  method: 'POST',
  headers: {
    ...headers,
    'Content-Type': 'application/json'
  },  
  body: JSON.stringify({
    posts
  })
})
//.then(res => res.json())



