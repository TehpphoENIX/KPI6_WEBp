import Header from './jsx/Header'
import Footer from './jsx/Footer'
import Post from './jsx/Post'
import { useLoaderData } from 'react-router-dom'
import PageNotFound from './404'

import './css/general.css'
import { useState, useRef } from 'react'

//import { Editor } from "react-draft-wysiwyg"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import PostEditor from './jsx/PostEditor'

const SaveButton = ({setMode}) => (
    <div onClick={() => setMode(false)}>
        save
    </div>
)

const ViewPage = () => {
    let post = useLoaderData();
    const [mode, setMode] = useState(false);
    let postReference = useRef(post)

    if(post != null){
        return (<>
            <Header/>
            <div class='main-body'>
                {
                    (mode)?
                        <>
                        <div class='editor-bar'>
                            <SaveButton setMode = {setMode}/>
                        </div>
                        <PostEditor postReference = {postReference}/>
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