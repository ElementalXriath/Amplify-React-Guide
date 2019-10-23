import React, { Component } from 'react';
import { Card, BSmall, Blockquote , Button, Alert } from 'bootstrap-4-react';
import { Link } from 'react-router-dom';
import './intro.css';


export default class App extends Component {
  render() {
    return (
    <div className="container mt-4 ">
        <Card>
        <Card.Header><span className="h3 text-success fonted">Step 1 : Configure your Amplify CLI.</span></Card.Header>
            <Card.Body>
            <Card.Title className="fonted">AWS CLI Configuration</Card.Title>
            <hr/>
            <Card.Text>
            After you have installed the prerequisite CLIs for AWS and AMPLIFY open a new terminal in your project. Make sure you are logged into your AWS account with your browser open. Open your project in your code editor and open a new terminal. Enter the command below. This is configuring the AWS CLI with your account information. 
                <br/>
                <hr/>
                <h3 success><span className="high fonted">From your projects root folder in terminal run :</span> amplify configure</h3>
                <hr/>
                After a few seconds it will prompt you to input some information and will automatically redirect you to AWS Dashboard in your browser. Select default as the user for the first question in your terminal after using AWS configure. This is the default user (you) that can now be used in all future AMPLIFY projects. The data is saved inside of your device meaning this will only be done once for this an any future projects. Once this is complete your ready to Amplify your project. 
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