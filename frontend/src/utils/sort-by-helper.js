const sortByHelper = (posts, filters) =>{
    const {sortPostBy} = filters ;
    switch(sortPostBy){
        case "least-votes":  
            return posts.sort(leastVotes)
        case "most-votes":
            return posts.sort(mostVotes)
        case "newest":
            return posts.sort(newest)
        case "oldest": 
            return posts.sort(oldest)
        case "none":
            return posts;
        default:
            return posts;
    }
}

function leastVotes(a,b) {
    if (a.voteScore < b.voteScore)
      return -1;
    if (a.voteScore > b.voteScore)
      return 1;
    return 0;
  }
  function mostVotes(b,a) {
    if (a.voteScore < b.voteScore)
      return -1;
    if (a.voteScore > b.voteScore)
      return 1;
    return 0;
  }
  function newest(b,a) {
    if (a.timestamp < b.timestamp)
      return -1;
    if (a.timestamp > b.timestamp)
      return 1;
    return 0;
  }
  function oldest(a,b) {
    
    if (a.timestamp < b.timestamp)
      return -1;
    if (a.timestamp > b.timestamp)
      return 1;
    return 0;
  }
export default sortByHelper ;

