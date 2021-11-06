import { useEffect, useState } from 'react';
import './ShowBody.css';

function ShowBody() {
  const [posts, setPosts] = useState([]);
  useEffect(()=>{
    fetch('https://general.yuefeichloechen.workers.dev/posts')
      .then(res => res.json())
      .then(apiData => {
        setPosts(apiData.data);
        console.log(posts);
      })
  },[])

  return (
    <div className="showbody">
        {
        posts.map((post, i) => 
            <div className="postWrapper" key={i}>
                <div className="title">{post.title}</div>
                <div className="user">{post.username}</div>
                <div>{post.content}</div>
            </div>
        )
        }
    </div>
  )
}

export default ShowBody;