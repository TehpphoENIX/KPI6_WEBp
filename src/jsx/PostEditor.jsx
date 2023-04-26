import '../css/Post.css'
import TextEditor from './TextEditor';

export default function Post({post}){
  return (
  <div class='post'>
    <div class='post__head'>
      <h2 class='post__header'>Header: <input type="text" defaultValue={post.header} onChange={e => {post.header = e.target.value}}/></h2>
      <div>
        <p class='post__author'>by <input type="text" defaultValue={post.author} onChange={e => {post.author = e.target.value}}/></p>
        <p class='post__date'><input type="date" defaultValue={post.date} onChange={e => {post.date = e.target.value}} /></p>
      </div>
    </div>
    <TextEditor initialState={post.text} updateCallback={newVal => post.text = newVal}/>
    <img class='post__img' src={post.imageSrc} alt={post.imageAlt}/>
  </div>
  )
}