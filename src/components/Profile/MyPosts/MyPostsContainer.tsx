import React from 'react';
import MyPostsMemorized, { MapPostsPropsType, DispatchPostsPropsType } from './MyPosts';
import {actions} from '../../../redux/profile-reducer';
import { connect } from 'react-redux';
import { AppStateType } from '../../../redux/redux-store';

const mapStateToProps = (state: AppStateType) => {
  return {
    posts: state.profilePage.posts
  }
}

const MyPostsContainer = connect<MapPostsPropsType, DispatchPostsPropsType, {}, AppStateType>(mapStateToProps, {
  addPost: actions.addPostActionCreator
})(MyPostsMemorized);

export default MyPostsContainer;
