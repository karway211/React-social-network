import React from 'react';
import dialogsReducer, { actions } from './dialogs-reducer';
import { DialogType, MessageType } from '../types/types';

const state = {
  dialogs: [
    {id: 1, name: 'Andrey'},
    {id: 2, name: 'Dima'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Valera'},
    {id: 5, name: 'Victor'},
    {id: 6, name: 'Sasha'}
  ] as Array<DialogType>,

  messages: [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'},
    {id: 6, message: 'Yo'}
  ] as Array<MessageType>
};

it('length of messages should be incremented', () => {
  let action = actions.sendMessage('Add message');
  let newState = dialogsReducer(state, action);
  expect(newState.messages.length).toBe(7);
});
it('length of messages should be incremented', () => {
  let action = actions.sendMessage('abrakadabra');
  let newState = dialogsReducer(state, action);
  expect(newState.messages[6].message).toBe('abrakadabra');
});