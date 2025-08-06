import { Component } from "react";
import CenterBox from "../../components/CenterBox";

import CheckCircleOutline from "../../assets/icons/check_circle_outline.svg";
import InsertEmoticon from "../../assets/icons/insert_emoticon.svg";
import PauseCircleOutline from "../../assets/icons/pause_circle_outline.svg";
import SentimentVeryDissatisfied from "../../assets/icons/sentiment_very_dissatisfied.svg";

import "../../assets/icons/material-ui-icon.css";

class Waiting extends Component {
    render() {
        if (this.props.selectedAnswer != null) {
            if (this.props.correctAnswer != null) {
                if (this.props.selectedAnswer === this.props.correctAnswer) {
                    return (
                        <CenterBox logo cancel="Exit" {...this.props}>
                            <img
                                src={InsertEmoticon}
                                className="material-ui-icon"
                                style={{ fontSize: "4.0em" }}
                                alt="Correct answer"
                            />
                            <div className="message-box">
                                <p>Vous avez raison.</p>
                                <p>Félicitations!</p>
                            </div>
                        </CenterBox>
                    );
                } else {
                    return (
                        <CenterBox logo cancel="Exit" {...this.props}>
                            <img
                                src={SentimentVeryDissatisfied}
                                className="material-ui-icon"
                                style={{ fontSize: "4.0em" }}
                                alt="Wrong answer"
                            />
                            <div className="message-box">
                                <p>Aucun point cette fois-ci.</p>
                                <p>La bonne réponse est :</p>
                                <p>{this.props.question.answers[this.props.question.correct]}</p>
                            </div>
                        </CenterBox>
                    );
                }
            } else {
                return (
                    <CenterBox logo cancel="Exit" {...this.props}>
                        <img
                            src={PauseCircleOutline}
                            className="material-ui-icon"
                            style={{ fontSize: "4.0em" }}
                            alt="Waiting"
                        />
                        <div className="message-box">
                            <p>Vous avez sélectionné</p>
                            <p>"{this.props.question.answers[this.props.selectedAnswer]}"</p>
                            <br />
                            <p>En attendant que l hôte<br />révèle la bonne réponse......</p>
                        </div>
                    </CenterBox>
                );
            }
        } else {
            const joinMessage = this.props.game.hostingRoom.title
                ? (
                    <div>
                        <p>Vous avez rejoint</p>
                        <p>"{this.props.game.hostingRoom.title.trim()}"</p>
                    </div>
                )
                : (
                    <p>Vous avez rejoint le quiz.</p>
                );
            return (
                <CenterBox logo cancel="Exit" {...this.props}>
                    <img
                        src={CheckCircleOutline}
                        className="material-ui-icon"
                        style={{ fontSize: "4.0em" }}
                        alt="Waiting"
                    />
                    <div className="message-box">
                        {joinMessage}
                        <p>En attendant la prochaine question...</p>
                    </div>
                </CenterBox>
            );
        }
    }
}

export default Waiting;
