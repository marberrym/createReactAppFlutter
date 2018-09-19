import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './Reducer'

let initialState = {postList: [
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
]}

let store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

let app = 
    <Provider store={store}>
        <Routes />
    </Provider>

ReactDOM.render(app, document.getElementById('root'));
