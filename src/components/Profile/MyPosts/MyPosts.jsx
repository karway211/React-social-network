import React from 'react';
import s from './MyPosts.module.css';
import Posts from './Post/Posts';

const MyPosts = () => {
    return (
      <div>
        My posts
        <div>
          <textarea></textarea>
          <button>Add Post</button>
        </div>
        <div className={s.posts}>
          <Posts message='Hi! How are you?' likeCount='15' />
          <Posts message='I am fine!' likeCount='25' />
          {/* <Posts />
          <Posts />
          <Posts />
          <Posts /> */}
        </div>
      </div>
    );
};

export default MyPosts;
