import React, { Component } from 'react'
import ButtonAppBar from './../../components/shared/button_app_bar'
import MenuAppBar from './../../components/shared/menu_app_bar'
import CustomLabel from './../../components/shared/custom_label'
import { connect } from "react-redux";
import { setUserCredentials } from './../../actions'
import UserProfileForm from './../../components/user_profile_form'
import "./user_profile.css"

class UserProfile extends Component {

  constructor(props) {
    super(props)
    this.isFetchingProfile = false;
  }

  componentWillMount() {
    const { getProfile, getAccessToken } = this.props.auth;
    const token = getAccessToken();
    if (!this.isFetchingProfile && token) {
      this.isFetchingProfile = true;
      getProfile((err, profile) => {
        this.props.setUserCredentials(profile);
      });
    }
  }

  render() {
    const { auth: { isAuthenticated }, user } = this.props;
    return (
      <div>
        {isAuthenticated() ? <MenuAppBar auth={this.props.auth} /> : <ButtonAppBar auth={this.props.auth} />}
        <CustomLabel content={`Perfil de ${user.name}`} font_size={25} text_align={"center"} height={100} />
        <div className="user-profile-form">
          <UserProfileForm
            given_name={user.given_name}
            family_name={user.family_name}
            email={user.email}
            email_verified={user.email_verified}
          />
        </div>
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