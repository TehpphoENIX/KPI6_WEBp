import '../css/Post.css'
import TextEditor from './TextEditor';

export default function Post({postReference}){
  return (
  <div class='post'>
    <div class='post__head'>
      <h2 class='post__header'>{postReference.current.header}</h2>
      <div>
        <p class='post__author'>by {postReference.current.author}</p>
        <p class='post__date'>{postReference.current.date}</p>
      </div>
    </div>
    <TextEditor initialState={postReference.current.text} updateCallback={newVal => postReference.current.text = newVal}/>
    {/* <p class='post__text'>{post.text}</p> */}
    <img class='post__img' src={postReference.current.imageSrc} alt={postReference.current.imageAlt}/>
  </div>
  )
}