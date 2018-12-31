import React from 'react';

import './Post.css';

const post = (props) => (
    <div className="Post" onClick={props.click}>
        <h1>{props.title}</h1>
        <div className="Info" >
            <div className="Author">{props.author}</div>
        </div>
    </div>
);

export default post;