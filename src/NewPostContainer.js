import React, { Component } from 'react';
import NewPost from './NewPost.js'

class NewPostContainer extends Component {
    constructor(props) {
        console.log(props)
        super(props);
        this.state = {
            newFlutter: '',
            submit: props.submitFlutter
        }
    }
    render() {
        let updateNewFlutter = (string) =>
            this.setState({newFlutter: string})
            
        return <NewPost {...this.state} update={updateNewFlutter}/>
    }
}

export default NewPostContainer;