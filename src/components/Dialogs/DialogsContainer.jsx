import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
// import StoreContext from '../../storeContext';
import { connect } from 'react-redux';

// const DialogsContainer = (props) => {
  
//   return <StoreContext.Consumer> 
//     {
//       (store) => {
//         let  state = store.getState().dialogsPage;
//         const onSentMessageClick = () => {
//           store.dispatch(sendMessageCreator());
//         }
//         const onNewMessageChange = (body) => {
//           store.dispatch(updateNewMessageBodyCreator(body));
//         }
//         return <Dialogs updateNewMessageBody={onNewMessageChange}
//                         sendMessage={onSentMessageClick} 
//                         dialogsPage={state} />;
//       }
//   }
//   </StoreContext.Consumer>
// }

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
