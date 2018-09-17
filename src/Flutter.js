import React from 'react';

let Flutter = (props) =>
    <div className="flutter">
        <div className="logoFlex mZero jStart">
            <img className="iconImg" src={props.icon} alt="Knives Millions" />
            <div className="postText">
                <div>{props.username}</div>
                <div>Fluttered</div>
            </div>
        </div>
        <p>{props.content}</p>
    </div>

export default Flutter;