import React from "react";
import { faCheck, faCog, faDownload, faFileAlt, faInbox, faSearch, faSign, faTrash } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    Row,
    Col,
    Button,
    ButtonGroup,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    FormInput,
    Badge,
    Progress
} from "shards-react";
import verifiedIcon from '../images/verified.png';
import { faSignature } from "@fortawesome/free-solid-svg-icons";

export default class Dashboard extends React.Component {
    render() {
        return (
            <div className="contain">
                <Row style={{ margin: 0 }}>
                    <Col sm="12" md="4" lg="2" style={{ textAlign: 'center' }}>
                        <div>
                            <h2 style={{ textAlign: 'center', fontWeight: 'bold' }}>SIGNA</h2>
                        </div>
                        <div className="side-nav">
                            <ul>
                                <li className="current"><a href="#"><FontAwesomeIcon icon={faFileAlt} /> Documents</a></li>
                                <li><a href="#"><FontAwesomeIcon icon={faCog} /> Settings</a></li>
                            </ul>
                        </div>
                        <Button block outline theme="success" className="sign-btn"><FontAwesomeIcon icon={faSignature} /> Sign Document</Button>
                    </Col>
                    <Col sm="12" md="4" lg="8">
                        <div>
                            <h3 style={{ fontWeight: 'bold', fontSize: 25 }}>Documents</h3>
                        </div>
                        <div className="page-content">
                            <InputGroup seamless>
                                <InputGroupAddon type="prepend">
                                    <InputGroupText>
                                        <FontAwesomeIcon icon={faSearch} />
                                    </InputGroupText>
                                </InputGroupAddon>
                                <FormInput placeholder="Search..." />
                            </InputGroup>
                            <br />
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Title</th>
                                        <th>Created at</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Document Title</td>
                                        <td>2021-02-12</td>
                                        <td>
                                            <ButtonGroup>
                                                <Button outline size="sm" theme="danger"><FontAwesomeIcon icon={faTrash} /></Button>
                                                <Button outline size="sm" theme="secondary"><FontAwesomeIcon icon={faDownload} /></Button>
                                            </ButtonGroup>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Col>
                    <Col sm="12" md="4" lg="2">
                        <div>
                        </div>
                        <div className="profile">
                            <img className="avatar" src="https://i.pravatar.cc/350" />
                            <h4>John Doe <img src={verifiedIcon} className="verified" /></h4>
                            <div className="stats">
                                <div>
                                    Monthly Usage (50/100)
                                </div>
                                <div>
                                    <Progress theme="success" value={50}></Progress>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}