import React, { Component } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "../../assets/icons/material-ui-icon.css";
import CenterBox from "../../components/CenterBox";
import "./ConnectionWarning.css";

export class ConnectionWarning extends Component {

    render() {
        return (
            <div>
                <CenterBox logo cancel="Cancel" {...this.props} showGitHubLink>
                    <div className="message-box">
                        <form>
                            <Container>
                                <Row>
                                    <Col md={12} className="vcenter">
                                        <div className="connection-warning">
                                            <h1>⚠️ Assurez-vous que votre connexion Internet ne tombe pas</h1>
                                            <p>
                                                Cet onglet de navigateur doit rester connecté au serveur principal
                                                jusqu'à la fin du quiz. Une brève interruption de connexion peut
                                                entraîner l'abandon du quiz.
                                            </p>
                                            <p>
                                                Assurez-vous d'avoir une connexion Internet stable et gardez toujours
                                                cet onglet de navigateur au premier plan. Passer d'un onglet à un autre
                                                pendant trop longtemps peut inciter le navigateur à mettre cet onglet
                                                en veille (et à le déconnecter du serveur).
                                            </p>
                                            <Button variant="warning"
                                                onClick={this.props.onConfirmed}
                                                style={{ width: "100%" }}>
                                                Proceed
                                            </Button>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12} className="vcenter">
                                    </Col>
                                </Row>
                            </Container>
                        </form>
                    </div>
                </CenterBox >
            </div >
        );
    }
}
