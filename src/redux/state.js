let rerenderEntireTree = () => {
  console.log('state changed')
}

const state = {
  profilePage: {

    posts: [
      {id: 1, message: 'Hi! How are you?', likesCount: 15},
      {id: 2, message: 'I am fine!', likesCount: 25},
      {id: 3, message: 'Bla-bla!', likesCount: 12},
      {id: 4, message: 'Da-da!', likesCount: 27}
    ],

    newPostText: 'it-camasutra.com'

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
    ],

    newDialogsText: 'newDialog'
    
  }

}

export const addPost = () => {
  const newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  }
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

export const addDialogs = () => {
  const newDialogs = {
    id: 5,
    message: state.dialogsPage.newDialogsText
  }
  state.dialogsPage.messages.push(newDialogs);
  state.dialogsPage.newDialogsText = '';
  rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export const updateNewDialogsText = (newDialogs) => {
  state.dialogsPage.newDialogsText = newDialogs;
  rerenderEntireTree(state);
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}

export default state;
