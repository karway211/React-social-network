import React from 'react';
import profileReducer, { actions } from './profile-reducer';
import { PostType } from '../types/types';


let state = {
  posts: [
    {id: 1, message: 'Hi! How are you?', likesCount: 15},
    {id: 2, message: 'I am fine!', likesCount: 25},
    {id: 3, message: 'Bla-bla!', likesCount: 12},
    {id: 4, message: 'Da-da!', likesCount: 27}
  ] as Array<PostType>,
  profile: null,
  status: '',
};

it('length of posts should be incremented', () => {
  let action = actions.addPostActionCreator('It is My first test');
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(5);
});

it('message of new post should be correct', () => {
  let action = actions.addPostActionCreator('It is My first test');
  let newState = profileReducer(state, action);
  expect(newState.posts[4].message).toBe('It is My first test');
});

it('after deleting length of messages should be decrement', () => {
  let action = actions.deletePostAC(1);
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(3);
});

it('after deleting length shouldn`t be decrement if id is incorrect', () => {
  let action = actions.deletePostAC(1000);
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(4);
});
