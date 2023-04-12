import Header from './jsx/Header';
import Footer from './jsx/Footer';
import Post from './jsx/Post'
import './css/general.css'

const MainPage = ({postArray}) => (
  <>
    <Header/> 
    <div class='main-body'>
      {postArray.map(post => <Post post = {post} referencing = {true} />)}
    </div>
    <Footer/>
  </>
);

export default MainPage;
