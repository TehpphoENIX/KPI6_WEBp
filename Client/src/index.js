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

let postArray = {} 

const serverAddr=`127.0.0.1:1001`

const getAllPosts = async () => {
  const jsonData = fetch(`127.0.0.1:1001/posts`,{
    method: "GET"
  })
    .then(r=>r.json())
  console.log(jsonData);
  return jsonData
}

const router = createBrowserRouter(
  createRoutesFromElements((
    <>
    <Route path="/" 
    element={<Main/>} />
    <Route 
      path=":id" 
      loader={({params})=>{
        return params.id
      }}
      element={<View/>}
    />
    <Route
      path="create"
      element={<CreatePage creationCallback={async (newPost)=>{
        let id
        await fetch(`http://localhost:1001/posts/create`,{
          method: "POST", 
          headers: {
              "Content-Type": "application/json",
            },
          body: JSON.stringify(newPost)
        })
          .then(r=>r.json())
          .then(j=>{id=j._id;return j})
          .catch(e=>console.log(e))
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
