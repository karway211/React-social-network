import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import dialogsReducer from "./dialogs-reducer";

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
  
      newMessageBody: ''
      
    },

    sidebar: {

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

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
  
}

export default store;
window.store = store;
