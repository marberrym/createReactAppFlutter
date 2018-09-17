import React from 'react';

let NewPost = (props) =>
    (<form className="flexColumn newFlutterBox" onSubmit={(event) => {
        event.preventDefault();
        props.update('');
        return props.submit('Jaydoe', 'images/MillionsKnives.png', props.newFlutter);
        }}>
        <textarea placeholder="255max" className="postType" value={props.newFlutter} onChange={
            (event) =>  props.update(event.target.value)
        }/>
        <input type="submit" className="submitBtn"/>
    </form>)

export default NewPost;