import React, { Component } from 'react'
import GameNameInput from './../../shared/game_name_input';
import GamePriceInput from './../../shared/game_price_input';
import GameGenderInput from './../../shared/game_gender_input';
import GameDescriptionInput from './../../shared/game_description_input';
import Send from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';
import Image from '@material-ui/icons/Image';
import Movie from '@material-ui/icons/Movie';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import ProgressBar from '../../shared/progress_bar';
import CustomSnackbar from '../../shared/custom_snackbar';
import FolderIcon from '@material-ui/icons/Folder';
import { connect } from "react-redux";
import { uploadFileToServer, uploadGameToServer } from '../../../actions/index';
import _ from 'lodash';
import "./../../../styles/enviar_jogo.css";

class EnviarJogoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gameName: "",
            gamePrice: "",
            gameGender: "",
            trailer: "",
            gameDescription: "",
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
            name: this.state.gameName,
            price: this.state.gamePrice,
            description: this.state.gameDescription,
            genero: this.state.gameGender,
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
        this.props.uploadFileToServer(result.data, this.state.selectedLogo, () => { });
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
        return (
            <div className={'enviar-jogo-form-root'}>
                <form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <FormControl>
                            <div className={"enviar-jogo-form"}>
                                <GameNameInput
                                    shrink={true}
                                    displaySearch={false}
                                    label={'Nome do jogo'}
                                    enableFullWidth={false}
                                    gameName={this.state.gameName}
                                    handleGameNameChange={this.handleChange('gameName')}
                                />
                                <GamePriceInput
                                    enableFullWidth={true}
                                    gamePrice={this.state.gamePrice}
                                    handleGamePriceChange={this.handleChange('gamePrice')}
                                />
                                <GameGenderInput
                                    gameGender={this.state.gameGender}
                                    handleGenderChange={this.handleChange('gameGender')}
                                />
                                <GameDescriptionInput
                                    shrink={true}
                                    label={'Descrição'}
                                    enableFullWidth={true}
                                    gameDescription={this.state.gameDescription}
                                    handleChange={this.handleChange('gameDescription')}
                                />
                            </div>
                        </FormControl>
                    </FormGroup>
                    <FormGroup style={{ height: 290 }}>
                        <FormControl>
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