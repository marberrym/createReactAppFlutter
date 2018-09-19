import React from 'react';
import { connect } from 'react-redux';

let Flutter = (props) =>
    <div className="flutter">
        <div className="logoFlex mZero jStart">
            <img className="iconImg" src={props.post.profileImg} alt="Knives Millions" />
            <div className="postText">
                <div>{props.post.username}</div>
                <div>Fluttered</div>
                <button className="deleteButton" onClick={() => props.dispatch({type: 'DELETE_FLUTTER', id: props.post.postID})}>Delete</button>
            </div>
        </div>
        <p>{props.post.post}</p>
    </div>

let FlutterSmart = connect(state => ({}))(Flutter);
export default FlutterSmart;