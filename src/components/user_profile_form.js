import React, { Component } from 'react'
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

export default class UserProfileForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            given_name: props.given_name,
            family_name: props.family_name,
            email: props.email,
            email_verified: props.email_verified,
        };
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    render() {
        const { given_name, family_name, email, email_verified } = this.state;
        return (
            <div>
                <FormControl>
                    <FormGroup>
                        <FormControl disabled>
                            <InputLabel htmlFor="name-disabled">Nome</InputLabel>
                            <Input id="name-disabled" value={given_name} onChange={this.handleChange} />
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <FormControl disabled>
                            <InputLabel htmlFor="name-disabled">Sobrenome</InputLabel>
                            <Input id="name-disabled" value={family_name} onChange={this.handleChange} />
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <FormControl disabled>
                            <InputLabel htmlFor="name-disabled">Email</InputLabel>
                            <Input id="name-disabled" value={email} onChange={this.handleChange} />
                        </FormControl>
                    </FormGroup>
                </FormControl>
            </div>
        )
    }
}
