import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import { Route, withRouter, HashRouter, Redirect, Switch, BrowserRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import LoginPage from './components/Login/Login';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import { initializedApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/redux-store';
import { withSuspense } from './hoc/withSuspense';
import ReactPhoto from './assets/images/React-icon.png';
// import DialogsContainer from './components/Dialogs/DialogsContainer';
// import ProfileContainer from './components/Profile/ProfileContainer';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {

  componentDidMount() {
    this.props.initializedApp();
  }

  render() {
    if(!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar className='navBar' />
        <div className='app-wrapper-content'>
          <Switch>
            <Route exact path='/' render={() => <Redirect to='/profile'/> }/>
            <Route path='/dialogs' render={ withSuspense(DialogsContainer) }/>
            <Route path='/profile/:userId?' render={ withSuspense(ProfileContainer) }/>
            <Route path='/news' render={ () => <News /> }/>
            <Route path='/music' render={ () => <Music /> }/>
            <Route path='/settings' render={ () => <Settings /> }/>
            <Route path='/users' render={() => <UsersContainer pageTitle={'Самураи'} />} />
            <Route path='/login' render={() => <LoginPage />} />
          </Switch>
          <div className='way'>
            <img src={ReactPhoto} alt="img"/>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

// export default compose(
//   withRouter,
//   connect(mapStateToProps, {initializedApp}))(App);

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializedApp}))(App);

const MyJSApp = (props) => {
  return <BrowserRouter>
            <Provider store={store}>
              <AppContainer />
            </Provider>
          </BrowserRouter>
}

export default MyJSApp;
