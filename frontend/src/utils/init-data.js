const initialData = {
  posts: {
    'post-1': { id: 'post-1', title: 'the first artlice' },
    'post-2': { id: 'post-2', title: 'the second post' },
    'post-3': { id: 'post-3', title: 'the third post' },
    'post-4': { id: 'post-4', title: 'the fourth post' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'posts',
      postIds: ['post-1', 'post-2', 'post-3', 'post-4'],
    },
  },
  columnOrder: ['column-1'],
};

export default initialData;