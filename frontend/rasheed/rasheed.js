//hard way

function mapDispatchToProps(dispatch){
    return {
        dispatch,
        /* propName */ fetchPosts:     /* dispatched action */ dispatch(fetchPosts()),
        /* propName */ receivePosts: /* dispatched action */ dispatch(receivePosts()),
    }
  }

  //easy way 

  const mapDispatchToProps = {
    fetchPosts,
    receivePosts,
  }