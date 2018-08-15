import React, { Component } from 'react'
import CustomLabel from './shared/custom_label'
import { Button, Checkbox, Form, Icon } from 'semantic-ui-react'
import './game_gender_filter_form.css'

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

    handleCBAcaoChange = () => {
        this.setState({ acao: !this.state.acao })
    }
    handleCBAventuraChange = () => {
        this.setState({ aventura: !this.state.aventura })
    }
    handleCBEstrategiaChange = () => {
        this.setState({ estrategia: !this.state.estrategia })
    }
    handleCBCasualChange = () => {
        this.setState({ casual: !this.state.casual })
    }
    handleCBEsportesChange = () => {
        this.setState({ esportes: !this.state.esportes })
    }
    handleCBIndieChange = () => {
        this.setState({ indie: !this.state.indie })
    }

    render() {
        return (
            <div className={"game-gender-filter-form"}>
                <hr />
                <Form widths='equal' onSubmit={this.handleSubmit}>
                    <Form.Field style={{ padding: 10, paddingTop: 5 }}>
                        <CustomLabel content={"NAVEGAR POR GÊNERO"} font_size={14} text_align={"left"} height={20} />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            name="acao"
                            label='Ação'
                            type="checkbox"
                            checked={this.state.acao}
                            onChange={this.handleCBAcaoChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            name="aventura"
                            label='Aventura'
                            type="checkbox"
                            checked={this.state.aventura}
                            onChange={this.handleCBAventuraChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            name="estrategia"
                            label='Estratégia'
                            type="checkbox"
                            checked={this.state.estrategia}
                            onChange={this.handleCBEstrategiaChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            name="casual"
                            label='Casual'
                            type="checkbox"
                            checked={this.state.casual}
                            onChange={this.handleCBCasualChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            name="esports"
                            label='Esportes'
                            type="checkbox"
                            checked={this.state.esports}
                            onChange={this.handleCBEsportesChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            name="indie"
                            label='Indie'
                            type="checkbox"
                            checked={this.state.indie}
                            onChange={this.handleCBIndieChange}
                        />
                    </Form.Field>
                    <Button type='submit'>
                        <Icon name='filter' />
                        FILTRAR (ENTER)
                    </Button>
                </Form>
                <hr />
            </div>
        )
    }
}
