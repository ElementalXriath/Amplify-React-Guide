import React, { Component } from 'react';
import { Card, BSmall, Blockquote , Button, Alert } from 'bootstrap-4-react';
import { Link } from 'react-router-dom';
import './intro.css';
import { FaAws, FaReact, FaNodeJs } from "react-icons/fa";

export default class App extends Component {
  render() {
    return (
    <div className="container mt-4 text-center">
      <Card text="center">
        <Card.Header className="h2 fonted"> <FaReact/>  React-JS | <FaAws/> AWS-Amplify </Card.Header>
        <Card.Body>
          <Card.Title className="fonted">This is a Guide on using Amazon Web Services with ReactJs with <span className="bold">Amplify</span></Card.Title>
          <hr/>
          <Card.Text>      
            This project is desinged to teach you how to successfully set up your ReactJs project with Amazon Web Services by using Amplify. First make sure you have all the Prequistes listed in the section below installed. This is a blank ReactJs project at the moment. As you follow the simple step by step instructions it will build its self into a Amplified ReactJS project.
            I will show you how to use the basic AWS technologies needed to build full stack such as Cognito , DynamoDB , GraphQL and serverless cloud computing services.
            
            

            The very first thing to do is to create your own Amazon Web Services account. I have provided the direct link. Remember the basic developement resources provided by AWS are free.
          </Card.Text>
          <hr/>
          This project was created using<span className="high"> npx create-react-app my app </span>command from <span>Command Prompt</span> terminal.
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

      <h1 className="m-4 fonted">Prerequisites</h1>
      <hr/>

      <Alert primary>These techs will be needed to complete this project. I am using Visual Code Studio.</Alert>

      <Card.Deck mb="3">
          <Card shadow p="3" mb="5" bg="light">
            <Card.Body>
              <Card.Title className="fonted">Node JS</Card.Title>
              <hr/>
              <Card.Text>
                Download the latest version of Node JS.  It is a command-line utility for interacting with said repository that aids in package installation, version management, and dependency management. 
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Text><BSmall text="success"><Button secondary sm active as="a" href="https://nodejs.org/en/">Download Node <FaNodeJs/></Button></BSmall></Card.Text>
            </Card.Footer>
          </Card>
          <Card shadow p="3" mb="5" bg="light">
            <Card.Body>
              <Card.Title className="fonted">Amplify CLI</Card.Title>
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
              <Card.Title className="fonted">AWS CLI</Card.Title>
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
