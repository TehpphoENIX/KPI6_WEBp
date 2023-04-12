import { Link } from 'react-router-dom';
import '../css/Post.css'

const Post = ({post, referencing}) => (
  <div class='post'>
    <div class='post__head'>
      {referencing?<Link to={`/${post.id}`}><h2 class='post__header'>{post.header}</h2></Link>:<h2 class='post__header'>{post.header}</h2>}
      <div>
        <p class='post__author'>by {post.author}</p>
        <p class='post__date'>{post.date}</p>
      </div>
    </div>
    <p class='post__text'>{post.text}</p>
    <img class='post__img' src={post.imageSrc} alt={post.imageAlt}/>
  </div>
);

export default Post;