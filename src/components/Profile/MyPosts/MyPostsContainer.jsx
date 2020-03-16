import React from 'react';
import MyPosts from './MyPosts';
import {addPostActionCreator, updateNewPostTextActionCreator} from './../../../redux/profile-reducer';
import StoreContext from '../../../storeContext';

const MyPostsContainer = (props) => {

  
    return (
      <StoreContext.Consumer>
        {
          (store) => {
            let state = store.getState();
            const addPost = () => {
              store.dispatch(addPostActionCreator());
            }
            const onPostChange = (text) => {
              store.dispatch(updateNewPostTextActionCreator(text));
            }
            return <MyPosts updateNewPostText={onPostChange}
                      addPost={addPost}
                      posts={state.profilePage.posts}
                      newPostText={state.profilePage.newPostText} />
          }
      }
      </StoreContext.Consumer>
    );
};

export default MyPostsContainer;
