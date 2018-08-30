import React, { Component } from 'react'
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Checkbox from '@material-ui/core/Checkbox';
import UserAvatarField from './user_avatar_field'

export default class UserProfileForm extends Component {
    render() {
        const { given_name, family_name, email, email_verified, sub } = this.props.user;
        return (
            <div>
                <UserAvatarField picture={this.props.user.picture} />
                <div className={"form-control-fields"}>
                    <FormGroup>
                        <FormControl className={"form-control-field"}>
                            <InputLabel>Nome</InputLabel>
                            <Input id="given-name" value={given_name} />
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <FormControl className={"form-control-field"}>
                            <InputLabel>Sobrenome</InputLabel>
                            <Input id="family-name" value={family_name} />
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <FormControl className={"form-control-field"}>
                            <InputLabel>Email</InputLabel>
                            <Input id="email-user" value={email} />
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <FormControl className={"form-control-field"}>
                            <InputLabel>Autenticação</InputLabel>
                            <Input id="profile-sub" value={sub} />
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <FormControl className={"form-control-field"}>
                            <FormControlLabel
                                control={
                                    <Checkbox checked={email_verified}
                                        value="email_verified"
                                    />
                                }
                                label="Email verificado"
                            />
                        </FormControl>
                    </FormGroup>
                </div>
            </div>
        )
    }
}
