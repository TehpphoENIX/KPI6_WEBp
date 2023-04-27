import Header from '../components/Header';
import Footer from '../components/Footer';
import Post from '../components/Post'
import '../css/general.css'

const MainPage = ({postArray}) => (
  <>
    <Header/> 
    <div class='main-body'>
      {postArray.map(post => <Post post = {post} referencing = {true} />)}
    </div>
    <div class='dummy'></div>
    <Footer/>
  </>
);

export default MainPage;
