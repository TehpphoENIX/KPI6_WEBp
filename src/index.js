import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import './css/index.css';

import reportWebVitals from './reportWebVitals';

import Main from './pages/Main';
import View from './pages/View';
import PageNotFound from './pages/404';
import CreatePage from './pages/Create';

const postArray = [
  {
    id:0,
    header:'Header',
    author:'Author',
    date:'date.date.date',
    imageSrc:'wat.svg',
    imageAlt:'image',
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac egestas lorem, eget bibendum sem. Vivamus cursus molestie auctor. Integer egestas nulla et orci condimentum laoreet. Morbi vulputate nunc eget quam semper, et ullamcorper turpis volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque non laoreet odio. Aliquam placerat nunc et lectus luctus, vehicula malesuada enim commodo. Pellentesque metus ex, pretium nec accumsan non, luctus et odio. Nunc id neque metus. Quisque quis elit magna.'
  },
  {
    id:1,
    header:'Header 2',
    author:'Author 2',
    date:'date.date.date2',
    imageSrc:'wat.svg',
    imageAlt:'image2',
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac egestas lorem, eget bibendum sem. Vivamus cursus molestie auctor. Integer egestas nulla et orci condimentum laoreet. Morbi vulputate nunc eget quam semper, et ullamcorper turpis volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque non laoreet odio. Aliquam placerat nunc et lectus luctus, vehicula malesuada enim commodo. Pellentesque metus ex, pretium nec accumsan non, luctus et odio. Nunc id neque metus. Quisque quis elit magna.'
  }
]

const router = createBrowserRouter(
  createRoutesFromElements((
    <>
    <Route path="/" element={<Main postArray={postArray} />} />
    <Route 
      path=":id" 
      loader={({params})=>{
        const found = postArray.find(element => element.id == params.id);
        if(found == undefined){
          return null
        }else{
          return found
        }
      }}
      element={<View/>}
    />
    <Route
      path="create"
      element={<CreatePage creationCallback={(newPost)=>{
        console.log(postArray)
        let id = postArray.length
        newPost.id = id
        postArray.push(Object.assign({},newPost))
        console.log(postArray)
        return id
      }}/>}
    />
    </>
  ))
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode> */
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
