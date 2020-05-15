import React from 'react';
import s from './Posts.module.css';

const Posts = (props) => {
  console.log(props.message);
    return (
          <div className={s.item}>
            <img src='https://hornews.com/images/news_large/c1d4b2b8ec608ea72764c5678816d5c9.jpg' alt='avatar'/>
            { props.message }
            <div>
              <span>{ props.likeCount }</span>
            </div>
          </div>
    );
};

export default Posts;
