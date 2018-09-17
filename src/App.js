import React, { Component } from 'react';
import Home from './Home.js';
import './App.css'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        postList: [
            {
                "username": "Jaydoe",
                "profileImg": "images/MillionsKnives.png",
                "post": "I love coffee and anime.",
                "postID": 1
            },
            {
                "username": "Jaydoe",
                "profileImg": "images/MillionsKnives.png",
                "post": "I love coffee and anime.",
                "postID": 2
            },
            {
                "username": "Jaydoe",
                "profileImg": "images/MillionsKnives.png",
                "post": "I love coffee and anime.",
                "postID": 3
            },
        ]
    }
  }
  render() {
    let generateId = () =>
        Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString();

    let submitFlutter = (username, icon, post) => {
        console.log("submitting")
        this.setState({postList: this.state.postList.concat([{"username": username,
        "profileImg": icon,
        "post": post,
        "postID": generateId()}])});
    }

    return <Home {...this.state} submitFlutter={submitFlutter}/>
  }
}

export default App;
