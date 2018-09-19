let reducer = (oldState, action) => {
    let generateId = () =>
        Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString();
        
    let submitFlutter = (post) => {
        let newPostList = oldState.postList.concat({"username": "Jaydoe",
            "profileImg": "images/flutter.png",
            "post": post,
            "postID": generateId})
        let newState = {...oldState,
            postList: newPostList};
        return newState;
    }

    let deleteFlutter = (id) => {
        let newPostList = oldState.postList.filter(post => post.postID !== id)
        let newState = {...oldState,
            postList: newPostList}
        return newState;
    }

    if (action.type === 'NEW_FLUTTER') {
        return submitFlutter(action.post);
    } else if (action.type === 'DELETE_FLUTTER') {
        return deleteFlutter(action.id);
    } else {
        return oldState;
    }
}

export default reducer;