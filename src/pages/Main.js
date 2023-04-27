import Header from '../components/Header';
import Footer from '../components/Footer';
import Post from '../components/Post'
import '../css/general.css'
import { useNavigate  } from 'react-router-dom';

const MainPage = ({postArray}) => {
  const navigate = useNavigate()
  return (<>
    <Header/> 
    <div class='main-body'>
      <div class='editor-bar'>
        <button class='editor-bar__button' onClick={() => navigate("/create")}>
          create
        </button>
      </div>
      {postArray.map(post => <Post post = {post} referencing = {true} />)}
    </div>
    <div class='dummy'></div>
    <Footer/>
  </>)
}

export default MainPage;
