import React, { Component } from 'react';
import NewPost from './NewPost.js'

class NewPostContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newFlutter: '',
        }
    }
    render() {
        let updateNewFlutter = (string) =>
            this.setState({newFlutter: string})
            
        return <NewPost {...this.state} update={updateNewFlutter}/>
    }
}

export default NewPostContainer;