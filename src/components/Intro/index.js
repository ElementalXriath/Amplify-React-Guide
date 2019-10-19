import React, { Component } from 'react';
import { Card, BSmall, Blockquote , Button, Alert } from 'bootstrap-4-react';
import { Link } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
    <div className="container mt-4 text-center">
   
      <Card text="center">
        <Card.Header className="h2">ReactJS + AWS-Amplify</Card.Header>
        <Card.Body>
          <Card.Title>How to use AWS-Amplify with ReactJs</Card.Title>
          <hr/>
          <Card.Text>
            Amazon Web Services make progamming EXTREMELY POWERFUL backends as easy as can be. Allowing developers to focus on the core mechanics of there application. They provide over 70 very intrect services from Antylitcs, security, authentication, and even hosting.
            <hr/>        
            This project is desinged to teach you how to successfully set up your ReactJs project with Amazon Web Services by using Amplify. First make sure you have all the Prequistes listed below installed. This projects root folder is a blank ReactJs project at the moment. As you follow the simple guide it will build its self into a Amplified ReactJS project.
            I will show you how to use the basic AWS technologies needed to build full stack such as Cognito , DynamoDB , GraphQL and serverless cloud computing services. The very first goal is to create your own Amazon Web Services account. I have provided the direct link. Remember the basic developement resources provided by AWS are free.
          </Card.Text>
          <hr/>
          This project was created using npx create-react-app my app command from device main terminal.
          <br/>
          <hr/>
          <Button m="2" warning href="https://aws.amazon.com/">Create AWS Account</Button>
          <Link to='/stepone'><Button success>
            Get Started
          </Button>
          </Link>
        </Card.Body>
        <Card.Footer text="success">Note : The very basic ReactJs skill is required.</Card.Footer>
      </Card>

      <h1 className="m-4">Prerequisites</h1>
      <hr/>

      <Alert primary>These techs will be needed to complete this project. I am using Visual Code Studio.</Alert>

      <Card.Deck mb="3">
          <Card shadow p="3" mb="5" bg="light">
            <Card.Body>
              <Card.Title>Node JS</Card.Title>
              <hr/>
              <Card.Text>
                Download the latest version of Node JS.  It is a command-line utility for interacting with said repository that aids in package installation, version management, and dependency management. 
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Text><BSmall text="success"><Button secondary sm active as="a" href="https://nodejs.org/en/">Download Node</Button></BSmall></Card.Text>
            </Card.Footer>
          </Card>
          <Card shadow p="3" mb="5" bg="light">
            <Card.Body>
              <Card.Title>Amplify CLI</Card.Title>
              <hr/>
              <Card.Text>
                Next open your Command Prompt and install the Amplify CLI globally. Remeber AWS and Amplify are different techs. Amplify is a CLI that allows access to AWS from your projects terminal.  I have provided the command. Copy and Paste.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Text><BSmall text="success">npm install -g @aws-amplify/cli</BSmall></Card.Text>
            </Card.Footer>
          </Card>
          <Card shadow p="3" mb="5" bg="light">
            <Card.Body>
              <Card.Title>AWS CLI</Card.Title>
              <hr/>
              <Card.Text>
                Finally open your Command Prompt and install AWS CLI globally by using this command. I have provided the command. Copy and Paste.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Text><BSmall text="success">npm install -g aws-cli</BSmall></Card.Text>
            </Card.Footer>
          </Card>
        </Card.Deck>
    </div>
    )
  }
}
