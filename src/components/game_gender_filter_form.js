import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FilterList from '@material-ui/icons/FilterList';
import './../styles/game_gender_filter_form.css'

export default class GameGenderFilterForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            acao: false,
            aventura: false,
            estrategia: false,
            casual: false,
            esportes: false,
            indie: false,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    render() {
        const { acao, aventura, estrategia, casual, esportes, indie } = this.state;
        return (
            <div className={"game-gender-filter-form"}>
                <hr />
                <FormControl>
                    <FormLabel>Navegar por Gênero</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={acao}
                                    onChange={this.handleChange('acao')}
                                    value="acao"
                                />
                            }
                            label="Ação"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={aventura}
                                    onChange={this.handleChange('aventura')}
                                    value="aventura"
                                />
                            }
                            label="Aventura"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={estrategia}
                                    onChange={this.handleChange('estrategia')}
                                    value="estrategia"
                                />
                            }
                            label="Estratégia"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={casual}
                                    onChange={this.handleChange('casual')}
                                    value="casual"
                                />
                            }
                            label="Casual"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={esportes}
                                    onChange={this.handleChange('esportes')}
                                    value="esportes"
                                />
                            }
                            label="Esportes"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={indie}
                                    onChange={this.handleChange('indie')}
                                    value="indie"
                                />
                            }
                            label="Indie"
                        />
                        <Button type='submit' variant="contained" color="secondary">
                            <FilterList style={{ marginRight: 10 }} />
                            Filtrar
                        </Button>
                    </FormGroup>
                </FormControl>
                <hr />
            </div>
        )
    }
}
