import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, updateStatus, getStatus, savePhoto, saveProfile } from '../../redux/profile-reducer';
import { withRouter, Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { ProfileType } from '../../types/types';

// type MapStatePropsType = {
//   profile: ProfileType
//   status: string
//   authorizedUserId: number | null
//   isAuth: boolean
// }
// type MapDispatchPropsType = {
//   getUserProfile: (userId: number | null) => void
//   getStatus: (userId: number) => void
//   updateStatus: (newStatus: string) => void
//   savePhoto: string
//   saveProfile: null as ProfileType | null,

// }
// type OwnPropsType = {
// }

// type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class ProfileContainer extends React.Component {
  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if(!userId) {
        this.props.history.push('/login');
      }
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }
  componentDidMount() {
    this.refreshProfile();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    
    return (
      <Profile { ...this.props }
              profile={ this.props.profile }
              status={this.props.status}
              updateStatus={this.props.updateStatus}
              isOwner={!this.props.match.params.userId}
              savePhoto={this.props.savePhoto}
              saveProfile={this.props.saveProfile} />
    );
  }
};

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth
});

export default compose(
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
  withRouter,
  // withAuthRedirect
)(ProfileContainer);
