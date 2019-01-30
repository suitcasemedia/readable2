let apiRoot = '';



switch (process.env.NODE_ENV){
  case 'development':
    apiRoot = "http://localhost:3001"
    break;
  case 'production':
    apiRoot = "http://localhost:3001"
    break;
}

export const API_ROOT = apiRoot;