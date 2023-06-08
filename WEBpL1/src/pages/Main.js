import Header from '../components/Header';
import Footer from '../components/Footer';
import Post from '../components/Post'
import '../css/general.css'
import { useNavigate  } from 'react-router-dom';
import { useEffect, useState } from 'react';

const MainPage = () => {
  const navigate = useNavigate()

  const [array, setArray] = useState()

  useEffect(()=>{
    fetch("http://localhost:1001/posts")

      .then(r=>r.json())
      .then(j=>{setArray(j);return j})
      .then(j=>console.log(j))
      .catch(e=>console.log(e))
  },[])

  return (<>
    <Header/> 
    <div class='main-body'>
      <div class='editor-bar'>
        <button class='editor-bar__button' onClick={() => navigate("/create")}>
          create
        </button>
      </div>
      {
        (array == undefined)?
          <p>Loading...</p>
        :
          array.map(post => <Post post = {post} referencing = {true} />
        )
      }
    </div>
    <div class='dummy'></div>
    <Footer/>
  </>)
}

export default MainPage;
