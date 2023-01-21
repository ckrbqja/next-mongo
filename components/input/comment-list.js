import classes from './comment-list.module.css';
import {useState} from "react";

function CommentList(props) {
    const {items} = props;


    return (
        <ul className={classes.comments}>
            {Object.entries(items).map(([i, d]) => (
                <li key={i}>
                    <p>{d.title}</p>
                    <div>
                        By <address>{d.address}</address>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default CommentList;
