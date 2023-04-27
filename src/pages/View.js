import Header from '../components/Header'
import Footer from '../components/Footer'
import Post from '../components/Post'
import { useLoaderData } from 'react-router-dom'
import PageNotFound from './404'

import '../css/general.css'
import { useState, useRef } from 'react'

//import { Editor } from "react-draft-wysiwyg"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import PostEditor from '../components/PostEditor'

const ViewPage = () => {
    let post = useLoaderData()
    const [mode, setMode] = useState(false);
    if(post != null){
        let localPost = Object.assign({},post)

        
        return (<>
            <Header/>
            <div class='main-body'>
                {
                (mode)?
                    <>
                    <div class='editor-bar'>
                        <button onClick={() => {
                                Object.assign(post, localPost)
                                setMode(false)
                            }}>
                            save
                        </button>
                    </div>
                    <PostEditor post = {localPost}/>
                    </>
                :
                    <>
                    <div class='editor-bar'>
                        <button class='editor-bar__button' onClick={() => setMode(true)}>
                            edit
                        </button>
                    </div>
                    <Post post = {post} /> 
                    </>
                }
            </div>
            <Footer/>
        </>);
    }else
    {
        return <PageNotFound/>
    }
    
}

export default ViewPage;