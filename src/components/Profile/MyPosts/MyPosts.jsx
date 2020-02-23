import React from 'react';
import s from './MyPosts.module.css';
import Posts from './Post/Posts';
import {addPostActionCreator, updateNewPostTextActionCreator} from './../../../redux/profile-reducer';

const MyPosts = (props) => {

  // const posts = [
  //   {id: 1, message: 'Hi! How are you?', likesCount: 15},
  //   {id: 2, message: 'I am fine!', likesCount: 25},
  //   {id: 3, message: 'Bla-bla!', likesCount: 12},
  //   {id: 4, message: 'Da-da!', likesCount: 27}
  // ]

  let postsElement = props.posts.map((p) => <Posts message={p.message} likeCount={p.likesCount} />);

  let newPostElement = React.createRef();

  const addPost = () => {
    props.dispatch(addPostActionCreator());
  }
  const onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  }
    return (
      <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
          <div>
            <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
          </div>
          <div>
            <button onClick={ addPost }>Add Post</button>
          </div>
        </div>
        <div className={s.posts}>
          { postsElement }
          {/* <Posts />
          <Posts />
          <Posts />
          <Posts /> */}
        </div>
      </div>
    );
};

export default MyPosts;
