import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const posts = [
    {id: 1, message: 'Hi! How are you?', likesCount: 15},
    {id: 2, message: 'I am fine!', likesCount: 25},
    {id: 3, message: 'Bla-bla!', likesCount: 12},
    {id: 4, message: 'Da-da!', likesCount: 27}
];

const dialogs = [
{id: 1, name: 'Andrey'},
{id: 2, name: 'Dima'},
{id: 3, name: 'Sveta'},
{id: 4, name: 'Valera'},
{id: 5, name: 'Victor'},
{id: 6, name: 'Sasha'}
];
const messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'},
    {id: 6, message: 'Yo'}
]

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
