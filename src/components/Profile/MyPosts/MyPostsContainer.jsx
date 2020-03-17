import React from 'react';
import MyPosts from './MyPosts';
import {addPostActionCreator, updateNewPostTextActionCreator} from './../../../redux/profile-reducer';
import { connect } from 'react-redux';
// import StoreContext from '../../../storeContext';

// const MyPostsContainer = (props) => {

  
//     return (
//       <StoreContext.Consumer>
//         {
//           (store) => {
//             let state = store.getState();
//             const addPost = () => {
//               store.dispatch(addPostActionCreator());
//             }
//             const onPostChange = (text) => {
//               store.dispatch(updateNewPostTextActionCreator(text));
//             }
//             return <MyPosts 
                     //  updateNewPostText={onPostChange}
//                       addPost={addPost}
//                       posts={state.profilePage.posts}
//                       newPostText={state.profilePage.newPostText} />
//           }
//       }
//       </StoreContext.Consumer>
//     );
// };

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
