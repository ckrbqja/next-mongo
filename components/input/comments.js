import {useEffect, useState} from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';

function Comments(props) {
    const {eventId} = props;

    const [showComments, setShowComments] = useState(false);
    const [comments, setComments] = useState([]);

    function toggleCommentsHandler() {
        setShowComments((prevStatus) => !prevStatus);
    }

    function addCommentHandler(commentData) {
        fetch(`/api/${eventId}`, {
            method: 'POST',
            body: JSON.stringify(commentData),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(d => d.json()).then(d => console.log(d.data))
        // send data to API
    }

    useEffect(d => {
        if(!showComments) return;
        
        fetch(`/api/${eventId}`)
            .then(d => d.json())
            .then(d => setComments(d.data))
    },[showComments])


    return (
        <section className={classes.comments}>
            <button onClick={toggleCommentsHandler}>
                {showComments ? 'Hide' : 'Show'} Comments
            </button>
            {showComments && <NewComment onAddComment={addCommentHandler}/>}
            {showComments && <CommentList items={comments}/>}
        </section>
    );
}

export default Comments;
