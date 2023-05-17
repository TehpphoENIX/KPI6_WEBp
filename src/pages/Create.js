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
    const onClickHandler = () => {
        let id = creationCallback(localPost)
        navigate(`/${id}`)
    }
    return (
        <>
        <Header/>
        <div class='main-body'>
            <div class='editor-bar'>
                <button class='editor-bar__button' onClick={onClickHandler}>
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