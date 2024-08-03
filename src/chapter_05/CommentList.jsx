import React from 'react';
import Comment from './Comment';

const comments = [
  {
    name: '김혜란',
    comment: '안녕하세요'
  },
  {
    name: '유재석',
    comment: '하이'
  }
]

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return (
          <Comment name={comment.name} comment={comment.comment} />
        );
      })}
    </div>
  );
}

export default CommentList;