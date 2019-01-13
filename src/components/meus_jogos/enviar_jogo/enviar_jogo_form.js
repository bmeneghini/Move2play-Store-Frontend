import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Send from '@material-ui/icons/Send';
import Image from '@material-ui/icons/Image';
import Movie from '@material-ui/icons/Movie';
import CustomLabel from '../../shared/custom_label';
import FolderIcon from '@material-ui/icons/Folder';
import Card from '@material-ui/core/Card';
import { connect } from "react-redux";
import { uploadLogoImage } from '../../../actions/index'

class EnviarJogoForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            desenvolvedor: "",
            preco: "",
            genero: "",
            trailer: "",
            selectedLogo: null,
            selectedLogoName: "",
            selectedGame: null,
            selectedGameName: "",
        }
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    fileChangedHandler = (event) => {
        this.setState({ selectedLogo: event.target.files[0] })
        if (event.target.files[0] != null) this.setState({ selectedLogoName: event.target.files[0].name })
    }

    gameChangedHandler = (event) => {
        this.setState({ selectedGame: event.target.files[0] })
        if (event.target.files[0] != null) this.setState({ selectedGameName: event.target.files[0].name })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.uploadLogoImage(this.state.selectedLogo);
    }

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
                <form autoComplete="off" onSubmit={this.handleSubmit}>
                    <Card className={"card-fields"}>
                        <FormGroup>
                            <FormControl>
                                <div className={"form-div"}>
                                    <TextField
                                        id="name"
                                        label="Nome"
                                        required
                                        value={this.state.nome}
                                        onChange={this.handleChange('nome')}
                                        margin="normal"
                                    />
                                    <TextField
                                        id="desenvolvedor"
                                        label="Desenvolvedor"
                                        required
                                        value={this.state.desenvolvedor}
                                        onChange={this.handleChange('desenvolvedor')}
                                        margin="normal"
                                    />
                                </div>
                            </FormControl>
                        </FormGroup>
                        <FormGroup style={{ height: 75 }}>
                            <FormControl>
                                <div className={"form-div"}>
                                    <TextField
                                        id="preco"
                                        label="Preço"
                                        required
                                        type="number"
                                        value={this.state.preco}
                                        onChange={this.handleChange('preco')}
                                        margin="normal"
                                    />
                                    <TextField
                                        id="genero"
                                        select
                                        label="Genero"
                                        required
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
                                </div>
                            </FormControl>
                        </FormGroup>
                        <FormGroup>
                            <FormControl>
                                <TextField
                                    id="descricao"
                                    label="Descrição"
                                    required
                                    value={this.state.descricao}
                                    onChange={this.handleChange('descricao')}
                                    multiline
                                    margin="normal"
                                />
                            </FormControl>
                        </FormGroup>
                    </Card >
                    <FormGroup style={{ height: 305 }}>
                        <FormControl>
                            <Card className={"card-upload"} style={{marginTop:10}}>
                                <div>
                                    <input
                                        accept="image/*"
                                        id="contained-button-file"
                                        multiple
                                        type="file"
                                        style={{ display: 'none', }}
                                        onChange={this.fileChangedHandler}
                                    />
                                    <label htmlFor="contained-button-file" style={{ padding: 15 }}>
                                        <Button
                                            style={{ width: 45, height: 45 }}
                                            variant="fab"
                                            color="secondary"
                                            component="span">
                                            <Image />
                                        </Button>
                                    </label>
                                    <TextField
                                        id="logo"
                                        value={this.state.selectedLogoName}
                                        required
                                        margin="normal"
                                        placeholder="Selecione um logo"
                                        style={{ width: "70%", marginLeft: 10 }}
                                    />
                                </div>
                                <div>
                                    <input
                                        accept="*"
                                        id="contained-button-game-upload"
                                        multiple
                                        type="file"
                                        style={{ display: 'none', }}
                                        onChange={this.gameChangedHandler}
                                    />
                                    <label htmlFor="contained-button-game-upload" style={{ padding: 15 }}>
                                        <Button
                                            style={{ width: 45, height: 45 }}
                                            variant="fab"
                                            color="secondary"
                                            component="span">
                                            <FolderIcon />
                                        </Button>
                                    </label>
                                    <TextField
                                        id="logo"
                                        value={this.state.selectedGameName}
                                        required
                                        margin="normal"
                                        placeholder="Selecione o arquivo compactado do jogo"
                                        style={{ width: "70%", marginLeft: 10 }}
                                    />
                                </div>
                                <div>
                                    <input
                                        accept="*"
                                        disabled
                                        id="contained-button-trailer"
                                        multiple
                                        type="file"
                                        style={{ display: 'none', }}
                                    />
                                    <label htmlFor="contained-button-trailer" style={{ padding: 15 }}>
                                        <Button
                                            style={{ width: 45, height: 45 }}
                                            variant="fab"
                                            color="secondary"
                                            component="span">
                                            <Movie />
                                        </Button>
                                    </label>
                                    <TextField
                                        id="trailer"
                                        value={this.state.trailer}
                                        required
                                        margin="normal"
                                        onChange={this.handleChange('trailer')}
                                        placeholder="Insira a URL do trailer"
                                        style={{ width: "70%", marginLeft: 10 }}
                                    />
                                </div>
                            </Card >
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
            </div >
        )
    }
}

export default connect(null, { uploadLogoImage })(EnviarJogoForm);