import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // Make sure the parent of Comments is passing the right props!
  // const { comments } = props;

  console.log('these are comments props', props)
  console.log('prop dot comment', props.comments)

  return (
    <div>
      {/* map through the comments data array and render a Comment for every comment piece of data */}
      { props.comments.map(data => 
       <Comment 
        key = {data.id}
        comment = {data}
        />
        )}
    </div>
  );
};

export default Comments;
