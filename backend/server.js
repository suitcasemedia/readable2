require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config');
const posts = require('./posts');
const app = express();

app.use(express.static('public'));
app.use(cors());

app.get('/', (req, res) => {
  const help = `
  <pre>
   

    Use an Authorization header to work with your own data:

    fetch(url, { headers: { 'Authorization': 'whatever-you-want' }})

    The following endpoints are available:

    
    

    GET /posts
      USAGE:
        Get all of the posts. Useful for the main page when no category is selected.

    POST /posts
      USAGE:
        Add a new post

      PARAMS:
        id - UUID should be fine, but any unique id will work
        timestamp - timestamp in whatever format you like, you can use Date.now() if you like
        title - String
        body - String
        author - String
        category: Any of the categories listed in categories.js. Feel free to extend this list as you desire.

    GET /posts/:id
      USAGE:
        Get the details of a single post

    POST /posts/:id
      USAGE:
        Used for voting on a post
      PARAMS:
        option - String: Either "upVote" or "downVote"

    PUT /posts/:id
      USAGE:
        Edit the details of an existing post
      PARAMS:
        title - String
        body - String
 </pre>
  `;

  res.send(help);
});

app.use((req, res, next) => {
  const token = req.get('Authorization');

  if (token) {
    req.token = token;
    next();
  } else {
    res.status(403).send({
      error:
        'Please provide an Authorization header to identify yourself (can be whatever you want)',
    });
  }
});

app.get('/posts', (req, res) => {
  posts.getAll(req.token).then(
    data => res.send(data),
    error => {
      console.error(error);
      res.status(500).send({
        error: 'There was an error.',
      });
    }
  );
});

app.post('/posts', bodyParser.json(), (req, res) => {
  posts.rank(req.token, req.body).then(
    data => res.send(data),
    error => {
      console.error(error);
      res.status(500).send({
        error: 'There was an error.',
      });
    }
  );
});

app.get('/posts/:id', (req, res) => {
  posts.get(req.token, req.params.id).then(
    data => res.send(data),
    error => {
      console.error(error);
      res.status(500).send({
        error: 'There was an error.',
      });
    }
  );
});


app.post('/posts/:id', bodyParser.json(), (req, res) => {
  const { option } = req.body;
  const id = req.params.id;
  posts.vote(req.token, id, option).then(
    data => res.send(data),
    error => {
      console.error(error);
      res.status(500).send({
        error: 'There was an error.',
      });
    }
  );
});

app.put('/posts/:id', bodyParser.json(), (req, res) => {
  posts.edit(req.token, req.params.id, req.body).then(
    data => res.send(data),
    error => {
      console.error(error);
      res.status(500).send({
        error: 'There was an error.',
      });
    }
  );
});

app.listen(config.port, () => {
  console.log('Server listening on port %s, Ctrl+C to stop', config.port);
});
