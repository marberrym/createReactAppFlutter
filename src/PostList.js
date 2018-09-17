import React from 'react';
import Flutter from './Flutter.js';

let PostList = (props) => 
    <div className="postArea">
        {props.postList.map(post => 
            <Flutter username={post.username} icon={post.profileImg} content={post.post} key={post.postID}/>
        )}
    </div>

export default PostList;