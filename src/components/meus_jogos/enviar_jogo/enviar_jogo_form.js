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
import ProgressBar from '../../shared/progress_bar';
import CustomSnackbar from '../../shared/custom_snackbar';
import FolderIcon from '@material-ui/icons/Folder';
import Card from '@material-ui/core/Card';
import { connect } from "react-redux";
import { uploadFileToServer, uploadGameToServer } from '../../../actions/index';
import _ from 'lodash';

class EnviarJogoForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            preco: "",
            genero: "",
            trailer: "",
            descricao: "",
            selectedLogo: null,
            selectedLogoName: "",
            selectedGame: null,
            selectedGameName: "",
            progressFile: 0,
            variant: 'success',
            content: '',
            duration: 4000,
        }
    }

    buildGameUploadDto = () => {
        let gameUploadDto = {
            developerId: this.props.user.sub,
            name: this.state.nome,
            price: this.state.preco,
            description: this.state.descricao,
            genero: this.state.genero,
            trailerUrl: this.state.trailer,
        }
        return gameUploadDto;
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

    uploadProgressFileHandler = (progressEvent) => {
        let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        this.setState({ progressFile: percentCompleted });
        if (percentCompleted === 100) {
            this.setState({ content: 'Jogo cadastrado com sucesso!', variant: 'success' }, () => this.showSnackbar());
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.uploadGameToServer(this.buildGameUploadDto(), this.handleUploadGameToServerSucccess, this.handleError);
    }

    handleUploadGameToServerSucccess = (result) => {
        this.props.uploadFileToServer(result.data, this.state.selectedLogo, () => {});
        this.props.uploadFileToServer(result.data, this.state.selectedGame, this.uploadProgressFileHandler);
    }

    handleError = (error) => {
        if (!_.isUndefined(error) && !_.isNull(error) && !_.isUndefined(error.response) && !_.isNull(error.response) && !_.isUndefined(error.response.data) && !_.isNull(error.response.data)) {
            var errorMessage = '';
            if (_.isArray(error.response.data)) {
                errorMessage = 'networkError';
            }
            else {
                errorMessage = `${error.response.data}`;
            }
        }
        this.setState({ content: errorMessage, variant: 'error' }, () => this.showSnackbar());
    }

    render() {
        const generos = [
            {
                value: 'Action',
                label: 'Ação',
            },
            {
                value: 'Adventure',
                label: 'Aventura',
            },
            {
                value: 'Strategy',
                label: 'Estratégia',
            },
            {
                value: 'Casual',
                label: 'Casual',
            },
            {
                value: 'Sports',
                label: 'Esportes',
            },
            {
                value: 'Indie',
                label: 'Indie',
            },
            {
                value: 'RPG',
                label: 'RPG',
            },
            {
                value: 'Simulation',
                label: 'Simulation',
            },
        ];

        return (
            <div className={""}>
                <CustomLabel content={`Preencha os campos com as devidas informações`} font_size={15} text_align={"left"} height={10} />
                <form autoComplete="off" onSubmit={this.handleSubmit}>
                    <Card className={"card-fields"}>
                        <FormGroup>
                            <FormControl style={{height: 50}}>
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
                                        id="preco"
                                        label="Preço"
                                        required
                                        type="number"
                                        value={this.state.preco}
                                        style={{ width: "23%", marginRight: "20px" }}
                                        onChange={this.handleChange('preco')}
                                        margin="normal"
                                    />
                                    <TextField
                                        id="genero"
                                        select
                                        label="Gênero"
                                        required
                                        value={this.state.genero}
                                        style={{ width: "26%"}}
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
                    <FormGroup style={{ height: 290 }}>
                        <FormControl>
                            <Card className={"card-upload"} style={{ marginTop: 5, marginBottom: 0 }}>
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
                                        placeholder="Selecione uma logo"
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
                                    <ProgressBar progress={this.state.progressFile} />
                                </div>
                            </Card >
                        </FormControl>
                    </FormGroup>
                    <Button type='submit' variant="contained" color="secondary">
                        <Send style={{
                            width: 25,
                            height: 25,
                            color: "white",
                            marginRight: 10,
                        }} />
                        Submeter
                    </Button>
                </form>
                <CustomSnackbar
                    setClick={e => this.showSnackbar = e}
                    duration={this.state.duration}
                    variant={this.state.variant}
                    content={this.state.content}
                />
            </div >
        )
    }
}

export default connect(null, { uploadFileToServer, uploadGameToServer })(EnviarJogoForm);