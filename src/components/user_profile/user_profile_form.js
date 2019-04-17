import React, { Component } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import UserAvatarField from './user_avatar_field';
import SimpleInput from './../shared/simple_input';

export default class UserProfileForm extends Component {

    buildFieldsObject = () => {
        const { given_name, family_name, email } = this.props.user;
        const fields = [
            {
                label: 'Nome',
                value: given_name
            },
            {
                label: 'Sobrenome',
                value: family_name
            },
            {
                label: 'Email',
                value: email
            }
        ];
        return fields;
    }

    renderFields = (fields) => {
        return fields.map((field, index) => {
            return <SimpleInput
                key={index}
                value={field.value}
                shrink={true}
                label={field.label}
                enableFullWidth={true}
            />
        })
    }
    render() {
        if (this.props.user === undefined || this.props.user.given_name === undefined) {
            return null;
        }
        const fields = this.buildFieldsObject();
        return (
            <div className={'user-profile-container'}>
                <div className={"form-control-fields"}>
                    {this.renderFields(fields)}
                    <FormControlLabel
                        control={
                            <Checkbox checked={this.props.user.email_verified}
                                value="email_verified"
                            />
                        }
                        label="Email verificado"
                    />
                </div>
                <div className={'user-avatar'}>
                    <UserAvatarField picture={this.props.user.picture} />
                </div>
            </div>
        )
    }
}
