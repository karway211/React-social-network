const store = {
  _state: {
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
  
  },
  _callSubscriber() {
    console.log('state changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
 

  dispatch(action){  // { type: 'ADD-POST' }
    if (action.type === 'ADD-POST') {

      const newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      }
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);

    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {

      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);

    } else if (action.type === 'ADD-DIALOGS') {

      const newDialogs = {
        id: 5,
        message: this._state.dialogsPage.newDialogsText
      }
      this._state.dialogsPage.messages.push(newDialogs);
      this._state.dialogsPage.newDialogsText = '';
      this._callSubscriber(this._state);

    } else if (action.type === 'UPDATE-NEW-DIALOGS-TEXT') {

      this._state.dialogsPage.newDialogsText = action.newDialogs;
      this._callSubscriber(this._state);

    }
  }
  
}

export default store;
window.store = store;
