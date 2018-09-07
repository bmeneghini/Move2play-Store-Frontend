import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Send from '@material-ui/icons/Send';
import CustomLabel from '../../shared/custom_label';

export default class EnviarJogoForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            desenvolvedor: "",
            preco: "",
            genero: "",
            imagens: {}
        }
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    onImagemChange = (imagens) => this.setState({ imagens });

    render() {

        const generos = [
            {
                value: 'acao',
                label: 'Ação',
            },
            {
                value: 'aventura',
                label: 'Aventura',
            },
            {
                value: 'estrategia',
                label: 'Estratégia',
            },
            {
                value: 'casual',
                label: 'Casual',
            },
            {
                value: 'esportes',
                label: 'Esportes',
            },
            {
                value: 'indie',
                label: 'Indie',
            },
        ];

        return (
            <div className={""}>
                <CustomLabel content={`Preencha os campos com as devidas informações`} font_size={15} text_align={"left"} height={10} />
                <form autoComplete="off">
                    <FormGroup>
                        <FormControl>
                            <TextField
                                id="name"
                                label="Nome"
                                value={this.state.nome}
                                onChange={this.handleChange('nome')}
                                margin="normal"
                            />
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <FormControl>
                            <TextField
                                id="desenvolvedor"
                                label="Desenvolvedor"
                                value={this.state.desenvolvedor}
                                onChange={this.handleChange('desenvolvedor')}
                                margin="normal"
                            />
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <FormControl>
                            <TextField
                                id="preco"
                                label="Preço"
                                type="number"
                                value={this.state.preco}
                                onChange={this.handleChange('preco')}
                                margin="normal"
                            />
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <FormControl>
                            <TextField
                                id="genero"
                                select
                                label="Genero"
                                value={this.state.genero}
                                onChange={this.handleChange('genero')}
                                helperText="Selecione um"
                                margin="normal"
                            >
                                {generos.map(option => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <FormControl>
                            <TextField
                                id="descricao"
                                label="Descrição"
                                value={this.state.descricao}
                                onChange={this.handleChange('descricao')}
                                multiline
                                margin="normal"
                            />
                        </FormControl>
                    </FormGroup>
                    <Button type='submit' variant="contained" color="secondary">
                        <Send style={{
                            width: 25,
                            height: 25,
                            color: "white",
                            marginRight: 10
                        }} />
                        Submeter
                    </Button>
                </form>
            </div>
        )
    }
}
