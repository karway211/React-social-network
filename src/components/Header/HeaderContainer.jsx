import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { logaut } from '../../redux/auth-reducer';
// import { authAPI } from '../../api/api';

class HeaderContainer extends React.Component {

  

  render() {
    return <Header { ...this.props } />
  }
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
});

export default connect(mapStateToProps, {logaut})(HeaderContainer);
