import React from 'react';
import s from './MyPosts.module.css';
import Posts from './Post/Posts';
// import {addPostActionCreator, updateNewPostTextActionCreator} from './../../../redux/profile-reducer';

const MyPosts = (props) => {

  let postsElement = props.posts.map((p) => <Posts message={p.message} likeCount={p.likesCount} />);

  let newPostElement = React.createRef();

  const onAddPost = () => {
    props.addPost();
  }

  const onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

    return (
      <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
          <div>
            <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
          </div>
          <div>
            <button onClick={ onAddPost }>Add Post</button>
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
