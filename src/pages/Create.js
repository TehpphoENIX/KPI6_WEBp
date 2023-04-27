import Header from '../components/Header'
import Footer from '../components/Footer'
import PostEditor from '../components/PostEditor'
import { useNavigate } from 'react-router-dom';

const CreatePage = ({creationCallback}) => {
    let localPost = {
        id:0,
        header:'',
        author:'',
        date:'',
        imageSrc:'',
        imageAlt:'',
        text:''
    }
    const navigate = useNavigate()
    return (
        <>
        <Header/>
        <div class='main-body'>
            <div class='editor-bar'>
                <button class='editor-bar__button' onClick={() => {
                        let id = creationCallback(localPost)
                        navigate(`/${id}`)
                    }}>
                    create
                </button>
            </div>
            <PostEditor post = {localPost}/>
        </div>
        <div class='dummy'></div>
        <Footer/>
        </>
    )
}

export default CreatePage