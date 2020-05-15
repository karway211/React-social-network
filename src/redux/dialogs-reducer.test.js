import React from 'react';
import dialogsReducer, { sendMessageCreator } from './dialogs-reducer';

const state = {
  dialogs: [
    {id: 1, name: 'Andrey'},
    {id: 2, name: 'Dima'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Valera'},
    {id: 5, name: 'Victor'},
    {id: 6, name: 'Sasha'}
  ],

  messages: [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'},
    {id: 6, message: 'Yo'}
  ]
};

it('length of messages should be incremented', () => {
  let action = sendMessageCreator('Add message');
  let newState = dialogsReducer(state, action);
  expect(newState.messages.length).toBe(7);
});
it('length of messages should be incremented', () => {
  let action = sendMessageCreator('abrakadabra');
  let newState = dialogsReducer(state, action);
  expect(newState.messages[6].message).toBe('abrakadabra');
});