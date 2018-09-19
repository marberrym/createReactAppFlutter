import React from 'react';
import { connect } from 'react-redux';


let NewPost = (props) =>
    (<form className="flexColumn newFlutterBox" onSubmit={(event) => {
        event.preventDefault();
        props.update('');
        return props.dispatch({type: "NEW_FLUTTER", post: props.newFlutter})
        }}>
        <textarea placeholder="255max" className="postType" value={props.newFlutter} onChange={
            (event) =>  props.update(event.target.value)
        }/>
        <input type="submit" className="submitBtn"/>
    </form>)


let NewPostSmart = connect(state => ({}))(NewPost);
export default NewPostSmart;