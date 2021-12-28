import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Card,
  CardTitle,
  CardBody,
  CardFooter,
  Button,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Form,
  FormInput,
  FormGroup
} from "shards-react";
import { faLock, faSignInAlt, faUser } from '@fortawesome/fontawesome-free-solid';

class Login extends React.Component {
  render() {
    return (
      <div style={{ margin: '50px auto', maxWidth: 400 }}>
        <Card>
          <CardBody>
            <CardTitle style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', padding: 20 }}>SIGNA</CardTitle>
            <Form onSubmit={(e) => {
              e.preventDefault();
              const form = e.target;
              const formData = new FormData(form);
              this.props.onLogin(formData.get('email'), formData.get('password'));
            }}>
              <FormGroup>
                <InputGroup seamless>
                  <InputGroupAddon type="prepend">
                    <InputGroupText>
                      <FontAwesomeIcon icon={faUser} />
                    </InputGroupText>
                  </InputGroupAddon>
                  <FormInput name="email" placeholder="E-mail" />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup seamless>
                  <InputGroupAddon type="prepend">
                    <InputGroupText>
                      <FontAwesomeIcon icon={faLock} />
                    </InputGroupText>
                  </InputGroupAddon>
                  <FormInput name="password" type="password" placeholder="Password" />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <Button block><FontAwesomeIcon icon={faSignInAlt} /></Button>
              </FormGroup>
            </Form>
            <p style={{ textAlign: 'center' }}>Not a member? <a href="#">Sign Up</a></p>
          </CardBody>
          <CardFooter style={{ textAlign: 'center' }}>Signa | Powered by Maesatech &copy; {new Date().getFullYear()}</CardFooter>
        </Card>
      </div>
    )
  }
}

export default Login;