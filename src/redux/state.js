import { rerenderEntireTree } from "../render"


const state = {
  profilePage: {

    posts: [
      {id: 1, message: 'Hi! How are you?', likesCount: 15},
      {id: 2, message: 'I am fine!', likesCount: 25},
      {id: 3, message: 'Bla-bla!', likesCount: 12},
      {id: 4, message: 'Da-da!', likesCount: 27}
    ]

  },
  
  dialogsPage: {

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
    
  }

}

export const addPost = (postMessage) => {
  const newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0
  }
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
}

export default state;
