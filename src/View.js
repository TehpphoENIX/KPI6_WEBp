import Header from './jsx/Header';
import Footer from './jsx/Footer';
import Post from './jsx/Post'
import { useLoaderData } from 'react-router-dom';
import PageNotFound from './404'

import './css/general.css'


const ViewPage = () => {
    let post = useLoaderData();
    if(post != null){
        return (<>
            <Header/>
            <div class='main-body'>
                <div class='editor-bar'>
                    <div class='editor-bar__button'>
                        edit
                    </div>
                </div>
                <Post post = {post} /> 
            </div>
            <Footer/>
        </>);
    }else
    {
        return <PageNotFound/>
    }
    
}

export default ViewPage;