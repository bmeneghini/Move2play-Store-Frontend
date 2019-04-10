import React, { Component } from 'react';
import ImageInput from './image_input';
import TrailerInput from './trailer_input';
import GameFileUploadInput from './game_file_upload_input';
import GameNameInput from './../../shared/game_name_input';
import GamePriceInput from './../../shared/game_price_input';
import GameGenderInput from './../../shared/game_gender_input';
import GameDescriptionInput from './../../shared/game_description_input';
import Send from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import ProgressBar from '../../shared/progress_bar';
import CustomSnackbar from '../../shared/custom_snackbar';
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
            gameTrailer: "",
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
            trailerUrl: this.state.gameTrailer,
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
                                    required={true}
                                    handleGameNameChange={this.handleChange('gameName')}
                                />
                                <GamePriceInput
                                    enableFullWidth={true}
                                    gamePrice={this.state.gamePrice}
                                    required={true}
                                    handleGamePriceChange={this.handleChange('gamePrice')}
                                />
                                <GameGenderInput
                                    gameGender={this.state.gameGender}
                                    required={true}
                                    handleGenderChange={this.handleChange('gameGender')}
                                />
                                <GameDescriptionInput
                                    shrink={true}
                                    label={'Descrição'}
                                    enableFullWidth={true}
                                    gameDescription={this.state.gameDescription}
                                    required={true}
                                    handleChange={this.handleChange('gameDescription')}
                                />
                                <TrailerInput
                                    shrink={true}
                                    enableFullWidth={false}
                                    gameTrailer={this.state.gameTrailer}
                                    required={true}
                                    handleChange={this.handleChange('gameTrailer')}
                                />
                                <ImageInput
                                    shrink={true}
                                    enableFullWidth={false}
                                    fileChangedHandler={this.fileChangedHandler}
                                    selectedLogoName={this.state.selectedLogoName}
                                />
                                <GameFileUploadInput
                                    shrink={true}
                                    enableFullWidth={false}
                                    gameChangedHandler={this.gameChangedHandler}
                                    selectedGameName={this.state.selectedGameName}
                                />
                            </div>
                        </FormControl>
                        <div style={{ height: 81 }}></div>
                        <div id={`footer`}>
                            <ProgressBar progress={this.state.progressFile} />
                            <Button type='submit' variant="contained" color="secondary">
                                <Send style={{
                                    width: 25,
                                    height: 25,
                                    color: "white",
                                    marginRight: 10,
                                }} />
                                Submeter
                            </Button>
                            <Button variant="contained" color="primary">
                                Cancelar
                            </Button>
                        </div>
                    </FormGroup>
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