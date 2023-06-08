import Header from '../components/Header'
import Footer from '../components/Footer'
import Post from '../components/Post'
import { useLoaderData, useNavigate } from 'react-router-dom'
import PageNotFound from './404'

import '../css/general.css'
import { useState, useRef, useEffect } from 'react'

//import { Editor } from "react-draft-wysiwyg"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import PostEditor from '../components/PostEditor'

const ViewPage = () => {
    let id = useLoaderData()
    const navigate = useNavigate()

    //load post
    const [post,setPost] = useState()
    const fetchPost = ()=>{
        let status
        fetch(`http://localhost:1001/posts/${id}`)
            .then(r=>(r.status == 200)?r:Promise.reject(new Error(`Server Response: ${r.status}`)))
            .then(r=>r.json())
            .then(j=>{setPost(j);console.log(j)})
            .catch(e=>console.log(e))
      }
    useEffect(fetchPost,[])

    const [mode, setMode] = useState(false);

    if(post != null && post != undefined){

        return (<>
            <Header/>
            <div class='main-body'>
                {
                (mode)?
                    <>
                    <div class='editor-bar'>
                        <button class='editor-bar__button' onClick={() => {
                                fetch(`http://localhost:1001/posts/${id}`,{
                                    method: "PATCH", 
                                    headers: {
                                        "Content-Type": "application/json",
                                      },
                                    body: JSON.stringify(post)
                                })
                                    .then(r=>r.json())
                                    .then(j=>{setPost(j);return j})
                                    .then(j=>console.log(j))
                                    .catch(e=>console.log(e))
                                setMode(false)
                            }}>
                            save
                        </button>
                    </div>
                    <PostEditor post = {post}/>
                    </>
                :
                    <>
                    <div class='editor-bar'>
                        <button class='editor-bar__button' onClick={() => setMode(true)}>
                            edit
                        </button>
                        <button class='editor-bar__button' onClick={() => {
                            fetch(`http://localhost:1001/posts/${id}`,{
                                method: "DELETE"
                            })
                                .then(console.log(`${id} deleted`))
                                .catch(e=>console.log(e))
                            navigate('/')
                        }}>
                            delete
                        </button>
                    </div>
                    {
                    (post == undefined)?
                        <p>Loading...</p>
                    :
                        <Post post = {post} /> 
                    }
                    </>
                }
            </div>
            <div class='dummy'></div>
            <Footer/>
        </>);
    }else
    {
        return <PageNotFound/>
    }
    
}

export default ViewPage;