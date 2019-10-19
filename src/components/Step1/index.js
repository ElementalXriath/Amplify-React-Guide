import React, { Component } from 'react';
import { Card, BSmall, Blockquote , Button, Alert } from 'bootstrap-4-react';
import { Link } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
    <div className="container mt-4 ">
        <Card text="center">
            <Card.Header>Step One : Configure Your ASW CLI with your new account information.</Card.Header>
            <Card.Body>
            <Card.Title>AWS CLI Configuration</Card.Title>
            <hr/>
            <Card.Text>
                After you have installed the prequisit CLIs for AWS and AMPLIFY open a new terminal in your project. Make sure you are logged into your AWS account with your browser open. Being that Amplify and AWS is a third party tech it will require a form of validation in your projects. With the CLI installed AWS is in sync with your device and knows it you. Inside the terminal at the root of your project enter this command. 
                <br/>
                <hr/>
                <h3 success>From your projects root folder in terminal run : amplify configure</h3>
                <hr/>
                After a few seconds it will promt you to input some information and will automatically redirect you to AWS Dashboard in your browser. Select default as the user for the first question in your terminal after using aws configure. This is the default user (you) that can now be used in all future AMPLIFY projects. The data is saved inside of your device meaning this will only be done once for this an any future projects. Once this is complete your ready to Amplify your project. 
            </Card.Text>
            <Link to='/steptwo'><Button success>
            Next Step 
          </Button>
          </Link>
            </Card.Body>
            <Card.Footer text="muted">Note : If you want to share your AWS with another developer you can create guest users from the AWS dashboard in the browser.</Card.Footer>
        </Card>
    </div>
    )
  }
}