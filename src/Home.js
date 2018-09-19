import React from 'react';
import NavBar from './Navbar.js';
import HeadLogo from './HeadLogo.js';
import NewPostContainer from './NewPostContainer.js';
import PostList from './PostList.js'

let Home = (props) => 
    <div className="flexColumn">
        <NavBar/>
        <HeadLogo/>
        <NewPostContainer/>
        <PostList postList={props.postList.reverse()}/>
    </div>

export default Home;