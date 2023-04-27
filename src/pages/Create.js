import Header from '../components/Header'
import Footer from '../components/Footer'
import PostEditor from '../components/PostEditor'
import { Navigate } from 'react-router-dom';

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
    return (
        <>
        <Header/>
            <div class='editor-bar'>
                <button onClick={() => {
                        let id = creationCallback(localPost)
                        return <Navigate to={`/${id}`} />
                    }}>
                    create
                </button>
            </div>
            <PostEditor post = {localPost}/>
        <Footer/>
        </>
    )
}

export default CreatePage