import React, { Component } from 'react'
import ButtonAppBar from '../../components/app_bar/button_app_bar'
import MenuAppBar from '../../components/app_bar/menu_app_bar'
import CustomLabel from './../../components/shared/custom_label'
import { connect } from "react-redux";
import { setUserCredentials } from './../../actions'
import UserProfileForm from './../../components/user_profile/user_profile_form'
import history from '../../components/config/history'
import Card from '@material-ui/core/Card';
import "./../../styles/user_profile.css";
import _ from 'lodash';

class UserProfile extends Component {

  constructor(props) {
    super(props)
    this.isFetchingProfile = false;
  }

  componentWillUpdate() {
    const { getProfile, getAccessToken } = this.props.auth;
    const token = getAccessToken();
    this.fetchUserProfile(getProfile, token);
  }

  componentWillMount() {
    const { getProfile, getAccessToken } = this.props.auth;
    const token = getAccessToken();
    if (!token) history.push("/")
    this.fetchUserProfile(getProfile, token);
  }

  fetchUserProfile = (getProfile, token) => {
    if (!this.isFetchingProfile && token) {
      this.isFetchingProfile = true;
      getProfile((err, profile) => {
        if (!_.isEmpty(profile)) {
          this.props.setUserCredentials(profile);
        }
      });
    }
  }

  render() {
    const { auth: { isAuthenticated }, user } = this.props;
    return (
      <div>
        {isAuthenticated() ? <MenuAppBar auth={this.props.auth} /> : <ButtonAppBar auth={this.props.auth} />}
        <CustomLabel content={`Perfil de ${user.name}`} font_size={25} text_align={"center"} height={100} />
        <Card className="user-profile-form">
          <UserProfileForm user={user} />
        </Card >
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, { setUserCredentials })(UserProfile);