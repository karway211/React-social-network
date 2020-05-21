import React from 'react';
import s from './Posts.module.css';

const Posts = (props) => {
  console.log(props.message);
    return (
          <div className={s.item}>
            <div className={s.blockPost}>
              <img src='https://toppng.com/uploads/preview/batman-icon-jira-avatar-11562897771zvwv8r510z.png' alt='avatar'/>
              { props.message }
            </div>
            <div className={s.likesCount}>
              <span>{ props.likeCount }</span><img src="http://pngimg.com/uploads/like/like_PNG84.png" alt="like"/>
            </div>
          </div>
    );
};

export default Posts;
